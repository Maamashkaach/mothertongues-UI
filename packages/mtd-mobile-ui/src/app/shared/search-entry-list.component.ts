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
    // highlighting in this interface only happens on either words or definitions
    const key = lang === 'L1' ? 'word' : 'definition';
    const text = this.$entriesHash.value[result[1]][key];
    const matches = result[2].filter((match) => match[0] === key).map((match) => match[1]);
  
    // Split the text by spaces and semicolons (keeping the delimiters in the array)
    const terms = text.split(/(\s+|;)/);
  
    const htmlTerms = terms.map((term, index) => {
      // Check if the term is in the matches array
      if (matches.includes(index)) {
        return `<span class="langMatched">${term}</span>`;
      } else {
        return term;
      }
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
