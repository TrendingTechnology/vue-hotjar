import Vue from 'vue'
import Hotjar from '../src'

beforeEach(() => {
  Vue.config.productionTip = false
  Vue.use(Hotjar, {
    id: '111111'
  })
  return new Vue({})
})

describe('Hotjar Production Mode', () => {
  it('Should add Hotjar to window object', () => {
    expect(window.hj).toBeDefined()
  })

  it('Hotjar ID should be equal argument ID', () => {
    expect(window._hjSettings.hjid).toBe('111111')
  })

  it('Expect Hotjar snippet version to be 6', () => {
    expect(window._hjSettings.hjsv).toBe(6)
  })
})
