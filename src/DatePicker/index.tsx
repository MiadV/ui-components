import * as React from 'react'
import { default as generatePicker, PickerTimeProps,PickerDateProps , RangePickerTimeProps,RangePickerDateProps } from 'antd/es/date-picker/generatePicker'
import en from 'antd/es/date-picker/locale/en_US'
import classNames from 'classnames'
import { ArrowRight, CaretDown } from 'phosphor-react'
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns'

import './style.css'
en.lang.quarterFormat = "'Q'Q"

const CaretDownIcon = <CaretDown />
const BaseDatePicker = generatePicker<Date>(dateFnsGenerateConfig)

export type TimePickerProps = PickerTimeProps<Date>  & {
  RangePicker: typeof RangePicker;
};
export type TimeRangePickerProps = RangePickerTimeProps<Date> & {
  popupClassName?: string; 
}
export type DateRangePickerProps = RangePickerDateProps<Date>;
export type DatePickerProps = PickerDateProps<Date>;

export const WeekPicker = BaseDatePicker.WeekPicker
export const MonthPicker = BaseDatePicker.MonthPicker
export const YearPicker = BaseDatePicker.YearPicker
export const RangePicker = BaseDatePicker.RangePicker


const createHandleOpenChange = (onOpenChange:undefined | ((open:boolean)=>void),setOpen:(open:boolean)=>void) => (isOpen:boolean) =>{
  setOpen(isOpen);
  if(onOpenChange){
    onOpenChange(isOpen);
  }
}

const getStyle = (open:boolean,className?:string,) => {return classNames(className,open ? "ui-open" : "")};

export const DatePicker:React.FC<DatePickerProps> = ({ onOpenChange ,className, ...restProps }) => {
  const [open, setOpen] = React.useState(false);
  const styles = React.useMemo(() => getStyle(open, className), [open, className])
  const handleOpenChange = React.useCallback(createHandleOpenChange(onOpenChange, setOpen), [onOpenChange, setOpen])
  return(
    <BaseDatePicker className={styles} onOpenChange={handleOpenChange} {...restProps}/>
  );
}

export const QuarterPicker : React.FC<DatePickerProps> = ({ onOpenChange ,className, ...restProps }) =>{
  const [open, setOpen] = React.useState(false);
  const styles = React.useMemo(() => getStyle(open, className), [open, className])
  const handleOpenChange = React.useCallback(createHandleOpenChange(onOpenChange, setOpen), [onOpenChange, setOpen])
  return(
    <BaseDatePicker className={styles} onOpenChange={handleOpenChange} {...restProps} picker='quarter' format={"YYYY-'Q'Q"}/>
  );
};

export const DateRangePicker:React.FC<DateRangePickerProps> = ({ onOpenChange ,className, ...restProps }) => {
  const [open, setOpen] = React.useState(false);
  const styles = React.useMemo(() => getStyle(open, className), [open, className])
  const handleOpenChange = React.useCallback(createHandleOpenChange(onOpenChange, setOpen), [onOpenChange, setOpen])
  return(
    <RangePicker className={styles}  onOpenChange={handleOpenChange}  {...restProps}/>
  );
}


export const TimePicker: React.FC<TimePickerProps> = ({ onOpenChange ,className, ...restProps }) => {
  const [open, setOpen] = React.useState(false);
  const styles = React.useMemo(() => getStyle(open, className), [open, className])
  const handleOpenChange = React.useCallback(createHandleOpenChange(onOpenChange, setOpen), [onOpenChange, setOpen])
  return(
    <BaseDatePicker.TimePicker className={styles}  onOpenChange={handleOpenChange}  {...restProps}/>
  );
}

export const TimeRangePicker = React.forwardRef<any, TimeRangePickerProps>((props, ref) => {

  // eslint-disable-next-line react/prop-types
  const { onOpenChange,className,picker,mode, ...restProps } = props;
  const [open, setOpen] = React.useState(false);
  const styles = React.useMemo(() => getStyle(open, className), [open, className])
  const handleOpenChange = React.useCallback(createHandleOpenChange(onOpenChange, setOpen), [onOpenChange, setOpen])
  return(
    <RangePicker className={styles} onOpenChange={handleOpenChange}  picker="time" ref={ref} {...restProps}/>
  );
});

DatePicker.defaultProps = {
  format: 'DD/MM/YYYY',
  suffixIcon: CaretDownIcon
}

TimePicker.defaultProps = {
  use12Hours:true,
  suffixIcon: CaretDownIcon,
  minuteStep:5,
  format:"h:mma",
};

QuarterPicker.defaultProps = {
  suffixIcon: CaretDownIcon
}

BaseDatePicker.RangePicker.defaultProps = {
  use12Hours:true,
  suffixIcon: CaretDownIcon,
  minuteStep:5,
  format:"h:mma",
  separator: <ArrowRight />
}

export default BaseDatePicker
