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
    
    console.log('Text:', text);
    
    // Split the text into words and separators
    const splitRegex = /(\s+|;|\(|\)|,|\.|!|\?)/;
    const terms = text.split(splitRegex);
    
    console.log('Terms:', terms);
    
    // Highlight matched words
    const highlightedTerms = terms.map((term, index) => {
      // Check if the term is a match and is not a separator
      const isMatch = result[2].some(match => match[0] === key && match[1] === index);
      
      console.log('Term:', term, 'Index:', index, 'Is Match:', isMatch);
      
      if (isMatch && !splitRegex.test(term)) {
        return `<span class="langMatched">${term}</span>`;
      } else {
        return term;
      }
    });
    
    // Join the terms back into a single string
    const highlightedText = highlightedTerms.join('');
    
    console.log('Highlighted Text:', highlightedText);
    
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
