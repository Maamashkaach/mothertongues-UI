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
  
    // Split the text into words and separators
    const splitRegex = /(\s+|;|\(|\)|,|\.|!|\?)/;
    const terms = text.split(splitRegex);
  
    // Create a map of term indices to ensure accurate matching
    let wordIndex = 0;
    const termIndexMap = terms.map((term, index) => {
      if (splitRegex.test(term) || term === "") {
        return -1; // Mark separators and empty terms
      } else {
        return wordIndex++; // Map word indices
      }
    });
  
    // Highlight matched words
    const highlightedTerms = terms.map((term, index) => {
      const isMatch = result[2].some(match => {
        return match[0] === key && termIndexMap[index] === match[1];
      });
      if (isMatch && term.trim()) {
        return `<span class="langMatched">${term}</span>`;
      } else {
        return term;
      }
    });
  
    const highlightedText = highlightedTerms.join('');
    return highlightedText;
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
