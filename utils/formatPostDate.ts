import { format, intervalToDuration, formatDistanceToNowStrict } from 'date-fns'

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)

  const { days } = intervalToDuration({
    start: date,
    end: new Date(),
  })

  if (days === undefined) {
    return
  }

  return days > 2
    ? format(date, 'dd/MM/YYY')
    : `${formatDistanceToNowStrict(date)} ago`
}
