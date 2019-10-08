import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class Grid extends React.Component {
  render() {
    return (
      <div style={{width:"100vw"}}>
        <ResponsiveReactGridLayout 
          onLayoutChange={this.props.onLayoutChange.bind(this)} 
          className="layout" compactType=''
          measureBeforeMount={false}
          layout={{lg: this.props.layout}}
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}} rowHeight={30} 
          >
          {
            this.props.layout.map(elem => {
              if (elem.i.includes("SP-")) {
                return <div 
                  onClick={this.props.elementSelector.bind(this, elem.i)} 
                  className={(elem.i === this.props.selected[this.props.selected.length-1])?"grid-selected":"react-grid-space"} 
                  key={elem.i}>{elem.i}</div>
              } else {
                return <div 
                  onClick={this.props.elementSelector.bind(this, elem.i)} 
                  className={(elem.i === this.props.selected[this.props.selected.length-1])?"grid-selected":""} 
                  key={elem.i}>{elem.i}</div>
              }
            })
          }
        </ResponsiveReactGridLayout>
      </div>
    )
  }
}