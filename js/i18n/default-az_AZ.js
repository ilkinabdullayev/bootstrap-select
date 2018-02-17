/*
 * Translated default messages for bootstrap-select.
 * Locale: AZ (Azerbaijan)
 * Region: AZ (Europe)
 * Author: Ilkin Abdullayev
 * Web site: http://ilkinabdullayev.com/
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Heçbiri seçilmədi',
    noneResultsText: 'Heç bir nəticə tapılmadı {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} element seçildi" : "{0} element seçildi";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Limit keçildi (maksimum {n} ədəd element)' : 'Limit keçildi (maksimum {n} ədəd element)',
        (numGroup == 1) ? 'Qrup limiti keçildi (maksimum {n} ədəd element)' : 'Grup limiti keçildi (maksimum {n} ədəd element)'
      ];
    },
    selectAllText: 'Hamsını Seç',
    deselectAllText: 'Təmizlə',
    multipleSeparator: ', '
  };
})(jQuery);
