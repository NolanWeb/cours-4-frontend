import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WelcomeItem from '@/components/WelcomeItem.vue'
import DocumentationIcon from '@/components/icons/IconDocumentation.vue'

describe('WelcomeItem.vue', () => {
  it('renders the icon slot content', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        icon: DocumentationIcon
      }
    })
    expect(wrapper.find('i').html()).toContain('<svg') // Assuming the icon is an SVG
  })

  it('renders the heading slot content', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        heading: '<span>Test Heading</span>'
      }
    })
    expect(wrapper.find('h3').text()).toBe('Test Heading')
  })

  it('renders the default slot content', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        default: '<p>Test Content</p>'
      }
    })
    expect(wrapper.find('.details').html()).toContain('<p>Test Content</p>')
  })
})