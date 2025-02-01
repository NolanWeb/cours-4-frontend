import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheWelcome from '@/components/TheWelcome.vue'
import WelcomeItem from '@/components/WelcomeItem.vue'

describe('TheWelcome.vue', () => {
  it('renders all WelcomeItem components', () => {
    const wrapper = mount(TheWelcome)
    const welcomeItems = wrapper.findAllComponents(WelcomeItem)
    expect(welcomeItems.length).toBe(5)
  })

  it('renders the correct content for each WelcomeItem', () => {
    const wrapper = mount(TheWelcome)
    const headings = [
      'Create Vue project with Vite',
      'Create Github repository',
      'Write test',
      'Create workflow',
      'Enjoy Github page'
    ]
    const welcomeItems = wrapper.findAllComponents(WelcomeItem)
    welcomeItems.forEach((item, index) => {
      expect(item.find('h3').text()).toBe(headings[index])
    })
  })
})