import { Observable } from 'rxjs'

/* -------------------------------------------- */
/*                 MANUAL TYPES                 */
/* -------------------------------------------- */

export type ContextMenuClickStream = Observable<
  [MenuClickData, chrome.tabs.Tab?]
>

export interface ContextMenuOptions {
  /** The unique ID to assign to this item. Cannot be the same as another context menu ID for this extension. */
  id: string
  /**
   * The text to be displayed in the item; this is required unless type is 'separator'.
   *
   * When the context is 'selection', you can use `%s` within the string to show the selected text. For example, if this parameter's value is "Translate '%s' to Pig Latin" and the user selects the word "cool", the context menu item for the selection is "Translate 'cool' to Pig Latin".
   */
  title: string
  /** CSS selector. Show the menu for elements matched by the selector. */
  selector?: string
  /** Show the menu everywhere except for elements matched by `options.selector`. */
  invert?: boolean
  /** The initial state of a checkbox or radio item: true for selected and false for unselected. Only one radio item can be selected at a time in a given group of radio items.  */
  checked?: boolean
  /** List of contexts this menu item will appear in. Defaults to ['page'] if not specified. */
  contexts?: string[]
  /** Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This applies to frames as well.) For details on the format of a pattern, see Match Patterns.  */
  documentUrlPatterns?: string[]
  /** Whether this context menu item is enabled or disabled. Defaults to true. */
  enabled?: boolean
  /** The ID of a parent menu item; this makes the item a child of a previously added item. */
  parentId?: any
  /** Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags.  */
  targetUrlPatterns?: string[]
  /** The type of menu item. Defaults to 'normal' if not specified.  */
  type?: string
  /** Whether the item is visible in the menu. */
  visible?: boolean
}

export interface MenuClickedEvent
  extends chrome.events.Event<
    (info: MenuClickData, tab?: chrome.tabs.Tab) => void
  > {}

export interface MenuClickData {
  /** Data on the click target */
  element?: Partial<HTMLElement>
  /** The text for the context selection, if any. */
  selectionText?: string
  /** A flag indicating the state of a checkbox or radio item after it is clicked.   */
  checked?: boolean
  /** The ID of the menu item that was clicked.   */
  menuItemId: any
  /** The ID of the frame of the element where the context menu was clicked, if it was in a frame. */
  frameId?: number
  /** The URL of the frame of the element where the context menu was clicked, if it was in a frame.   */
  frameUrl?: string
  /** A flag indicating whether the element is editable (text input, textarea, etc.).   */
  editable: boolean
  /** One of 'image', 'video', or 'audio' if the context menu was activated on one of these types of elements.   */
  mediaType?: string
  /** A flag indicating the state of a checkbox or radio item before it was clicked.   */
  wasChecked?: boolean
  /** The URL of the page where the menu item was clicked. This property is not set if the click occured in a context where there is no current page, such as in a launcher context menu.   */
  pageUrl: string
  /** If the element is a link, the URL it points to. */
  linkUrl?: string
  /** The parent ID, if any, for the item clicked. */
  parentMenuItemId?: any
  /** Will be present for elements with a 'src' URL. */
  srcUrl?: string
}
