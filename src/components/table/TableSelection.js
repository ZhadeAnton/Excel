export class TableSection {
  static className = 'selected'

  constructor() {
    this.group = []
    this.current = null
  }

  clear() {
    this.group.forEach($el => $el.removeClass(TableSection.className))
    this.group = []
  }

  get selectedIds() {
    return this.group.map($el => $el.id())
  }

  select($el) {
    this.clear()
    this.current = $el
    this.group.push($el)
    $el.addClass(TableSection.className).focus()
  }

  selectGroup($group = []) {
    this.clear()
    this.group = $group
    this.group.forEach($el => $el.addClass(TableSection.className))
  }

  applyStyle(style) {
    this.group.forEach($el => $el.css(style))
  }
}
