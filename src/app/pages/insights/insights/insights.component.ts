import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { getCSSVariableValue } from '@src/app/_metronic/kt/_utils';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {
  chartOptions: any = {};
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredMainCat: Observable<string[]>;
  filteredSubCat: Observable<string[]>;
  mainCategoryCtrl = new FormControl('');
  subCategoryCtrl = new FormControl('');

  category: string[] = [' المجلد الاول'];
  allCategory: string[] = ['المجلد الثالث', 'المجلد الثاني'];

  subCategory: string[] = ['الخبر الاول'];
  allSubCategory: string[] = ['الخبر الثالث', 'الخبر الثاني ', 'الخبر الاول'];


  @ViewChild('subInput') subInput: ElementRef<HTMLInputElement>;
  @ViewChild('catInput') catInput: ElementRef<HTMLInputElement>;
  constructor() {
    this.filteredMainCat = this.mainCategoryCtrl.valueChanges.pipe(startWith(null),
      map((category: string | null) => (category ? this._filterCategory(category) : this.allCategory.slice())),
    )
    this.filteredSubCat = this.subCategoryCtrl.valueChanges.pipe(startWith(null),
      map((subCategory: string | null) => (subCategory ? this._filterSubCategory(subCategory) : this.allSubCategory.slice())),
    )

  }

  private _filterCategory(value: string): string[] {
    const categoryvalue = value.toLowerCase();

    return this.allCategory.filter(c => c.toLowerCase().includes(categoryvalue));
  }

  private _filterSubCategory(value: string): string[] {
    const subCategoryvalue = value.toLowerCase();


    return this.allSubCategory.filter(c => c.toLowerCase().includes(subCategoryvalue));
  }
  public generateDayWiseTimeSeries = function (baseval: any, count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  };
  ngOnInit(): void {
    this.chartOptions =
      this.chartOptions = {
        series: [
          {
            name: "الاماراتي",
            data: this.generateDayWiseTimeSeries(
              new Date("11 Feb 2017 GMT").getTime(),
              20,
              {
                min: 10,
                max: 60
              }
            )
          },
          {
            name: "السعودية",
            data: this.generateDayWiseTimeSeries(
              new Date("11 Feb 2017 GMT").getTime(),
              20,
              {
                min: 10,
                max: 20
              }
            )
          },
          {
            name: "الامارات العربية المتحدة",
            data: this.generateDayWiseTimeSeries(
              new Date("11 Feb 2017 GMT").getTime(),
              20,
              {
                min: 10,
                max: 15
              }
            )
          }
        ],
        chart: {
          type: "line",
          height: 350,
          stacked: true,
          events: {
            selection: function (chart: any, e: any) {
              console.log(new Date(e.xaxis.min));
            }
          }
        },
        colors: ["#008FFB", "#00E396", "#CED4DC"],
        dataLabels: {
          enabled: false
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8
          }
        },
        legend: {
          position: "top",
          horizontalAlign: "right"
        },
        xaxis: {
          type: "datetime"
        }
      };

    //getChartOptions(350);
  }
  removec(cat: string): void {
    const index = this.category.indexOf(cat);

    if (index >= 0) {
      this.category.splice(index, 1);
    }
  }
  removeSub(cat: string): void {
    const index = this.subCategory.indexOf(cat);

    if (index >= 0) {
      this.subCategory.splice(index, 1);
    }
  }
  addc(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.category.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.mainCategoryCtrl.setValue(null);
  }


  selectedC(event: MatAutocompleteSelectedEvent): void {
    this.category.push(event.option.viewValue);
    this.catInput.nativeElement.value = '';
    this.mainCategoryCtrl.setValue(null);
  }
  selectedSub(event: MatAutocompleteSelectedEvent): void {

    this.subCategory.push(event.option.viewValue);
    this.subInput.nativeElement.value = '';
    this.subCategoryCtrl.setValue(null);
  }

}

function getChartOptions(height: number) {
  const labelColor = getCSSVariableValue('--kt-gray-500');
  const borderColor = getCSSVariableValue('--kt-gray-200');
  const textColor = getCSSVariableValue('--kt-gray-900');
  const baseColor = getCSSVariableValue('--kt-info');
  const lightColor = getCSSVariableValue('--kt-info-light');
  const title = "Wedny";

  return {
    series: [
      {
        name: '',
        data: [1, 4, 5, 3, 2],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'line',
      height: 350,
      toolbar: {
        show: true,
      },
    },
    plotOptions: {},
    legend: {
      show: true,
    },
    dataLabels: {
      enabled: true,
    },
    fill: {
      type: 'solid',
      opacity: 1,
    },

    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: ['مصر', 'دبي', 'السعودية', 'قطر', 'الممكله المتحده', 'الأمارات العربيه المتحده', 'المانيا'],
      title: {
        text: "الكلمات المفتاحية الرئيسية أو الفرعية",
        align: "center"
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        position: 'front',
        stroke: {
          color: baseColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {


      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        }, maxWidth: "auto",

      },
    },
    title: {
      text: "الوزن النسبي",
      align: "left",
      offsetX: 110

    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: number) {
          return val;
        },
      },
    },
    colors: [textColor],
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    markers: {
      strokeColors: baseColor,
      strokeWidth: 3,
    },
  };
}
