import * as React from 'react'
import generatePicker from 'antd/es/date-picker/generatePicker'
import en from 'antd/es/date-picker/locale/en_US'
import { CaretDown } from 'phosphor-react'
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns'

import './style.css'
en.lang.quarterFormat = "'Q'Q"

const CaretDownIcon = <CaretDown />
const DatePicker = generatePicker<Date>(dateFnsGenerateConfig)

export const QuarterPicker = DatePicker.QuarterPicker
export const WeekPicker = DatePicker.WeekPicker
export const MonthPicker = DatePicker.MonthPicker
export const YearPicker = DatePicker.YearPicker
export const RangePicker = DatePicker.RangePicker
export const TimePicker = DatePicker.TimePicker

QuarterPicker.defaultProps = {
  format: "YYYY-'Q'Q",
  suffixIcon: CaretDownIcon
}

DatePicker.defaultProps = {
  suffixIcon: CaretDownIcon
}

DatePicker.RangePicker.defaultProps = {
  suffixIcon: CaretDownIcon
}

export default DatePicker
