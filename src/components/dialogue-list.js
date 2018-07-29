import React from 'react'
import { Button, Table } from 'semantic-ui-react'
import Dialogue from './dialogue'

export default (props) =>
  <Table celled selectable striped compact>
    <Table.Header fullWidth>
      <Table.Row>
        <Table.Cell
          colSpan={props.events && props.events.format ? props.events.format.length : 1}>
          <Button className='ui green button'
                  onClick={props.reRenderASS}>重新渲染字幕</Button>
        </Table.Cell>
      </Table.Row>
    </Table.Header>
    <Table.Header fullWidth>
      <Table.Row>
        {
          props.events && props.events.format &&
          props.events.format.map(f => <Table.HeaderCell
            key={f}>{f}</Table.HeaderCell>)
        }
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {
        props.events && props.events.dialogue &&
        props.events.dialogue.map((d, i) => <Dialogue key={i} dialogue={d}
                                                      header={props.events.format}
                                                      onJsonChanged={(d) => props.onJsonChanged(i, d)}/>)
      }
    </Table.Body>
  </Table>
