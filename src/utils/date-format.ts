/**
 * Formats the date based on the locale that the user is using
 *
 * @param date Date to format
 * @param locale Locale for the date
 * @returns formatted date based on locale
 */
export const formatDate = (date: string, locale: string) =>
    Intl.DateTimeFormat(locale).format(new Date(date));
