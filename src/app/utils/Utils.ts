import {AbstractControl} from '@angular/forms';

export class Utils {
  public static scrollToElement(elementId, scrollPadding?: number) {
    const el = document.getElementById(elementId);
    let yScroll = window.scrollY;
    let sPadding = 0;
    let interval;
    if (scrollPadding !== undefined) sPadding = scrollPadding;
    if (el !== null) {
      if (el.getClientRects()[0].top <= sPadding) {
        interval = window.setInterval(function () {
          window.scroll(0, yScroll);
          yScroll -= 10;
          if (el.getClientRects()[0].top >= sPadding) {
            window.clearInterval(interval);
          }
          if (0 > yScroll) {
            window.clearInterval(interval);
          }
        }, 5);
      } else {
        interval = window.setInterval(function () {
          window.scroll(0, yScroll);
          yScroll += 10;
          if (el.getClientRects()[0].top <= sPadding) {
            window.clearInterval(interval);
          }
          if ((document.documentElement.scrollHeight - window.innerHeight) < yScroll) {
            window.clearInterval(interval);
          }
        }, 5);
      }
    }
  }

  public static initEqualsInputs(input1: AbstractControl, input2: AbstractControl) {
    let isChangesLastNameOfUser = false;
    input1.valueChanges.subscribe(data => {
      if (!isChangesLastNameOfUser)
        input2.patchValue(data, {emitEvent: false});
    });
    input2.valueChanges.subscribe(data => {
      isChangesLastNameOfUser = true;
    });
  }

  public static searchElementInObject(value: { [key: string]: any }[], key: string, valueKey: any): any {
    let i;
    let result = {};
    let isBreak = false;
    for (i = 0; i < value.length; i++) {
      Object.keys(value[i]).some(name => {
        if (name === key) {
          const val = value[i][name] + '';
          const val1 = valueKey + '';
          if (val1 === val) {
            result = value[i];
            isBreak = true;
            return true;
          } else {
            return false;
          }
        }
      });
      if (isBreak) {
        break;
      }
    }
    return result;
  }

  public static generateArrayYears(countYears, isReverse = true) {
    let today = new Date;
    let yearSelect = [];
    if (isReverse) {
      for (let i = 0; i < countYears + 1; i++) {
        yearSelect[countYears - i] = today.getFullYear() - countYears + i;
      }
    } else {
      for (let i = 0; i < countYears + 1; i++) {
        yearSelect[i] = today.getFullYear() - countYears + i;
      }
    }
    return yearSelect;
  }

  public static eqNull(value: any) {
    return (((typeof value) === 'undefined') || (value === null) || (value === ''));
  }
}
