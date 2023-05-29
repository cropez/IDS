import React from 'react'
import { css, StyleSheet } from 'aphrodite'


const Spinner = () => {
  return (
    <div className={css(component.container)}>
      <div className={css(component.elem, component.first)} />
      <div className={css(component.elem, component.second)} />
      <div className={css(component.elem, component.third)} />
      <div className={css(component.elem)} />
    </div>
  )
}


const component = StyleSheet.create({
  container: {
    display: 'inline-block',
    position: 'relative',
    height: 20,
    width: 20
  },
  first: {
    animationDelay: '-0.45s'
  },
  second: {
    animationDelay: '-0.3s'
  },
  third: {
    animationDelay: '-0.15s'
  },
  elem: {
    boxSizing: 'border-box',
    display: 'block',
    position: 'absolute',
    width: 16,
    height: 16,
    margin: 2,
    border: '2px solid #fff',
    borderRadius: '50%',
    //animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    animationName: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' }
    },
    animationDuration: '1.2s',
    animationIterationCount: 'infinite',
    borderColor: '#fff transparent transparent transparent'
  }
})


export default Spinner