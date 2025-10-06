<script lang="ts">
  import { Table } from '@flowbite-svelte-plugins/datatable';
  import type { DataTableOptions } from '@flowbite-svelte-plugins/datatable';

  // Define types for the render function parameters
  interface CellNode {
    nodeName: string;
    attributes?: Record<string, string | number>;
    childNodes?: (CellNode | TextNode)[];
  }

  interface TextNode {
    nodeName: '#text';
    data: string;
  }

  interface TableCell {
    childNodes: (CellNode | TextNode)[];
    data: any;
  }

  interface TableRow {
    attributes?: Record<string, string>;
    cells: TableCell[];
  }

  // Type the render functions properly
  const renderIcon = function (data: any, _cell: TableCell, _dataIndex: number, _cellIndex: number): string {
    if (data === 'Latte') {
      return `☕ ${data}`;
    } else if (data === 'Green tea') {
      return `🍵 ${data}`;
    }
    return `🌿 ${data}`;
  };

  // Price column cell manipulation
  const renderButton = function (data: any, cell: TableCell, dataIndex: number, _cellIndex: number): void {
    cell.childNodes.push({
      nodeName: 'BUTTON',
      attributes: {
        'data-row': dataIndex,
        class: 'buy-now'
      },
      childNodes: [
        {
          nodeName: '#text',
          data: 'Buy Now!'
        }
      ]
    });
  };

  // Caffeinated column cell manipulation
  const renderYesNo = function (data: any, cell: TableCell, _dataIndex: number, _cellIndex: number): void {
    if ([true, false].includes(data)) {
      cell.childNodes = [
        {
          nodeName: 'SPAN',
          attributes: {
            class: data === true ? 'caffeinated' : 'uncaffeinated'
          },
          childNodes: [
            {
              nodeName: '#text',
              data: data === true ? 'Yes' : 'No'
            }
          ]
        }
      ];
    }
  };

  // Numbers with styling
  const renderHighLow = function (data: any, cell: TableCell, _dataIndex: number, _cellIndex: number): void {
    const cellTextNode = cell.childNodes[0];
    const currencyNode: CellNode = {
      nodeName: 'SPAN',
      attributes: {
        class: 'currency '
      },
      childNodes: [cellTextNode]
    };
    cell.childNodes = [currencyNode];

    if (data < 0) {
      currencyNode.attributes!.class += 'currency--loss';
    } else if (data > 0) {
      currencyNode.attributes!.class += 'currency--profit';
    } else if (data === 0) {
      currencyNode.attributes!.class += 'currency--zero';
    }
  };

  const data = {
    headings: ['ID', 'Drink', 'Price', 'Caffeinated', 'Profit'],
    data: [
      [574, 'Latte', 4.0, false, 0.0],
      [984, 'Herbal tea', 3.0, false, 0.56],
      [312, 'Green tea', 3.0, true, 1.72],
      [312, 'Latte', 3.0, true, -1.21],
      [312, 'Green tea', 3.0, false, 0.0],
      [312, 'Green tea', 3.0, false, 0.0],
      [312, 'Green tea', 3.0, true, 1.72],
      [312, 'Latte', 3.0, true, 1.72],
      [312, 'Green tea', 3.0, true, -1.21],
      [312, 'Green tea', 3.0, false, 0.0],
      [312, 'Green tea', 3.0, true, 1.72],
      [312, 'Green tea', 3.0, true, 1.72],
      [312, 'Latte', 3.0, false, 0.0],
      [312, 'Latte', 3.0, true, 1.72],
      [312, 'Green tea', 3.0, false, 0.0],
      [312, 'Green tea', 3.0, true, 1.72],
      [312, 'Latte', 3.0, false, 0.0],
      [312, 'Latte', 3.0, true, -1.21],
      [312, 'Latte', 3.0, true, 1.72],
      [312, 'Latte', 3.0, false, 0.0],
      [312, 'Latte', 3.0, false, 0.0],
      [312, 'Latte', 3.0, true, 1.72],
      [312, 'Green tea', 3.0, true, -1.21],
      [312, 'Green tea', 3.0, true, -1.21],
      [312, 'Green tea', 3.0, true, -1.21]
    ]
  } as const;

  const cellRendererOptions: DataTableOptions = {
    data: {
      headings: [...data.headings],
      data: data.data.map((row) => [...row])
    },
    rowRender: (row: TableRow, tr: TableRow, _index: number) => {
      if ([true, false].includes(row.cells[3].data)) {
        if (!tr.attributes) {
          tr.attributes = {};
        }
        if (!tr.attributes.class) {
          tr.attributes.class = row.cells[3].data === true ? 'yes' : 'no';
        } else {
          tr.attributes.class += row.cells[3].data === true ? ' yes' : ' no';
        }
      }
    },
    columns: [
      {
        select: 0,
        hidden: true,
        type: 'number'
      },
      {
        select: 1,
        render: renderIcon,
        type: 'string'
      },
      {
        select: 2,
        render: renderButton,
        type: 'number'
      },
      {
        select: 3,
        render: renderYesNo,
        type: 'boolean'
      },
      {
        select: 4,
        render: renderHighLow,
        type: 'number'
      }
    ]
  };
</script>

<Table dataTableOptions={cellRendererOptions} />
