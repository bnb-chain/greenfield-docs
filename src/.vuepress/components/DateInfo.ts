import { ClientOnly, usePageData, usePageLang } from "@vuepress/client"
import { type PropType, type VNode, defineComponent, h } from "vue"

import { CalendarIcon } from "@theme-hope/modules/info/components/icons"
import { useMetaLocale } from "@theme-hope/modules/info/composables/index"

/**
 * @description Displays the published date at the top of articles
 * 
 * @summary     This component modifies the Hope Theme DateInfo component to use the updateTime value 
 *              from git where available. If the metadata doesn't exist it will default to the standard 
 *              functionality of showing the first published date.  
 * 
 * @dev         This component is transpiled by the theme which has access to @theme-hope and doesn't need
 *              to be added as an additional package.
 */
export default defineComponent({
  name: "DateInfo",

  inheritAttrs: false,

  props: {
    /**
     * Date information
     *
     * 日期信息
     */
    date: {
      type: Object as PropType<Date | null>,
      default: null,
    },

    /**
     * Localized date text
     *
     * 本地化的日期文字
     */
    localizedDate: {
      type: String,
      default: "",
    },

    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean,
  },

  setup(props) {
    const lang = usePageLang()
    const metaLocale = useMetaLocale()
    const page = usePageData()

    const updateTime = page.value["git"]?.updatedTime
      ? new Date(page.value["git"]?.updatedTime)
      : null

    return (): VNode | null =>
      updateTime || props.date
        ? h(
            "span",
            {
              class: "page-date-info",
              "aria-label": `${metaLocale.value.date}${props.pure ? "" : "📅"}`,
              ...(props.pure ? {} : { "data-balloon-pos": "down" }),
            },
            [
              h(CalendarIcon),
              h(
                "span",
                h(ClientOnly, () =>
                  updateTime
                    ? updateTime.toLocaleDateString(lang.value, { month: "long", day: "numeric", year: "numeric" })
                    : props.localizedDate || props.date!.toLocaleDateString(lang.value),
                ),
              ),
              h("meta", {
                property: "datePublished",
                // ISO Format Date string
                content: updateTime
                  ? updateTime.toISOString()
                  : props.date
                  ? props.date.toISOString()
                  : "",
              }),
            ],
          )
        : null
  },
})
