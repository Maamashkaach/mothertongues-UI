import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  HostListener,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from '../../core/data.service';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../core/route.animations';
import { DictionaryEntryExportFormat } from '@mothertongues/search';

@Component({
  selector: 'mtd-random',
  templateUrl: './random.component.html',
  styleUrls: [
    './random.component.scss',
    '../../shared/layout/single/single.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomComponent {
  displayNav = true;
  entries$ = new Subject<DictionaryEntryExportFormat[]>();
  unsubscribe$ = new Subject<void>();
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  show?: string;
  // Use nRandom = this.guessNumEntries() to guess the number of entries that can fit on the screen
  nRandom = 10;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef
  ) {
    this.route.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        this.show = params.show;
        this.ref.markForCheck();
      });
    //
    this.dataService.$entriesLength
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((entriesLength) => {
        if (entriesLength > 0) {
          this.nRandom = entriesLength;
        }
      });
  }

  @HostListener('window:resize')
  handleResize() {
    const newCount = this.guessNumEntries();
    if (newCount != this.nRandom) {
      // No real reason to use an Observable here, right?
      this.nRandom = newCount;
      this.ref.markForCheck();
    }
  }

  /**
   * Guess a reasonable number of entries based on the viewport size.
   *
   * This can't be exact because the entries may expand for long definitions.
   */
  guessNumEntries(): number {
    /* FIXME: for now, we use the viewport size and not the size of
       the content__text element - this is not very readable and has
       to match the defitions in `styles-variables.scss` and
       `single.component.scss`! */
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;
    const is_phone = vw < 600; // NOTE: not specific to phones!
    const toolbar_height = is_phone ? 56 : 64; // Thanks, Google!
    const margin = is_phone ? 16 : 32;
    const header_height = is_phone ? 32 : 48;
    const padding = is_phone ? 10 : 15;
    const guide_height = 18; // NOTE: just a guess!
    const height =
      vh -
      toolbar_height -
      2 * margin -
      header_height -
      2 * padding -
      guide_height;

    // FIXME: Really unsure where those extra 6 pixels come from.  Thanks, Google.
    return Math.max(2, Math.floor(is_phone ? height / 96 : height / 56));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }

  getRandom() {
    // FIXME: Not actually guaranteed to exist yet...
    const entries = this.dataService.$sortedEntries.value;
    const r = Array(this.nRandom)
      .fill(0)
      .map((_) => {
        const idx = Math.floor(Math.random() * entries.length);
        return entries[idx];
      });
    this.entries$.next([...new Set(r)]); // Don't allow duplicates in the random set
  }
}
