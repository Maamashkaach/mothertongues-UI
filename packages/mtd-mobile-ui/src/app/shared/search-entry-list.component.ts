import {
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { DataService } from '../data.service';
import { DictionaryEntryExportFormat, Result } from '@mothertongues/search';

@Component({
  selector: 'mtd-search-entry-list',
  styleUrls: ['entry-list.component.scss'],
  templateUrl: 'search-entry-list.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class SearchEntryListComponent implements OnChanges, OnInit {
  edit = false;
  maxResults = 20; // this can make it super slow if it's unconstrained
  $entriesHash;
  @Input()
  parentEdit!: boolean;
  @Input()
  entries!: Result[];
  @Input()
  searchterm!: string;
  @Input() threshold?: number;
  isModalOpen = false;
  modalEntry: DictionaryEntryExportFormat;
  constructor(public dataService: DataService) {
    this.$entriesHash = this.dataService.$entriesHash;
  }

  ngOnInit(): void {}

  showModal(entry: DictionaryEntryExportFormat) {
    this.modalEntry = entry;
    this.isModalOpen = true;
  }

  setOpen(value: boolean) {
    this.isModalOpen = value;
  }

  didDismiss() {
    this.isModalOpen = false;
  }

  highlight(result: Result, lang: 'L1' | 'L2') {
    const key = lang === 'L1' ? 'word' : 'definition';
    const text = this.$entriesHash.value[result[1]][key];
  
    // Split the text by spaces, semicolons, and brackets while preserving delimiters
    const terms = text.split(/(\s+|;|\(|\))/);
  
    // Create a set of indices to highlight, excluding delimiters
    const indicesToHighlight = new Set(result[2]
      .filter(match => match[0] === key)
      .map(match => match[1])
      .filter(index => terms[index] && ![';', '(', ')'].includes(terms[index])));
  
    // Create the highlighted terms
    const htmlTerms = terms.map((term, index) => {
      if (indicesToHighlight.has(index)) {
        return `<span class="langMatched">${term}</span>`;
      }
      return term; // No need to wrap non-highlighted terms in a span
    });
  
    return htmlTerms.join('');
  }


  ngOnChanges() {
    if (this.parentEdit !== undefined) {
      this.edit = this.parentEdit;
    }
  }

  trackByFn(index: number, item: DictionaryEntryExportFormat) {
    return item.entryID;
  }
}
