import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn, GridDetailRow, GridToolbar, GridDetailRowProps, GridDataStateChangeEvent, GridExpandChangeEvent } from '@progress/kendo-react-grid';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import { IntlProvider, load, LocalizationProvider, loadMessages, IntlService } from '@progress/kendo-react-intl';


import esMessages from './es.json';
loadMessages(esMessages, 'es-ES');

import { DataResult, process, State } from '@progress/kendo-data-query';
//import orders from './orders.json';
import orders from './exam.json';

import { Order } from './interfaces';
import { Row } from 'reactstrap';

interface LocaleInterface {
  language: string,
  locale: string
}
const DATE_FORMAT = 'yyyy-mm-dd hh:mm:ss.SSS';
const intl = new IntlService('en');



const DetailComponent = (props: GridDetailRowProps) => {
  const dataItem = props.dataItem;
  return (
    <div>
      <Row>
        {/* <section style={{ width: "150px", float: "left" }}>
          <p><strong>Category:</strong> {dataItem.categoryName}</p>
          <p><strong>Role:</strong> {dataItem.roleName}</p>
          <p><strong>Medium:</strong> {dataItem.medium}</p>
          <p><strong>Exam Type:</strong> {dataItem.examType}</p>
        </section> */}
        <Grid style={{ width: "2000px" }} data={dataItem.details} />
      </Row>
    </div>
  );
}

const DatatableTables = () => {
  const locales: LocaleInterface[] = [
    {
      language: 'en-US',
      locale: 'en'
    },
    {
      language: 'es-ES',
      locale: 'es'
    }
  ]
  const [dataState, setDataState] = React.useState<State>({
    skip: 0,
    take: 20,
    sort: [
      { field: 'orderDate', dir: 'desc' }
    ],
    group: [
      { field: 'categoryName' }
    ]
  })
  const [currentLocale, setCurrentLocale] = React.useState<LocaleInterface>(locales[0]);
  const [dataResult, setDataResult] = React.useState<DataResult>(process(orders, dataState))

  const dataStateChange = (event: GridDataStateChangeEvent) => {
    setDataResult(process(orders, event.dataState));
    setDataState(event.dataState);
  }

  const expandChange = (event: GridExpandChangeEvent) => {
    const isExpanded =
      event.dataItem.expanded === undefined ?
        event.dataItem.aggregates : event.dataItem.expanded;
    event.dataItem.expanded = !isExpanded;

    setDataResult({ ...dataResult })
  }

  let _pdfExport: any;
  const exportExcel = () => {
    _export.save();
  }

  let _export: any
  const exportPDF = () => {
    _pdfExport.save();
  }

  return (
    <div className="page-content">

      <LocalizationProvider language={currentLocale.language}>
        <IntlProvider locale={currentLocale.locale} >
          <div>
            <ExcelExport
              data={orders}
              ref={(exporter) => { _export = exporter; }}
            >
              <Grid
                style={{ height: '750px' }}
                sortable={true}
                filterable={true}
                groupable={true}
                reorderable={true}
                pageable={{ buttonCount: 4, pageSizes: true }}

                data={dataResult}
                {...dataState}
                onDataStateChange={dataStateChange}
                detail={DetailComponent}
                expandField="expanded"
                onExpandChange={expandChange}
              >
                <GridToolbar>
                  Locale:&nbsp;&nbsp;&nbsp;
                  <DropDownList
                    value={currentLocale}
                    textField="language"
                    onChange={(e) => { setCurrentLocale(e.target.value) }}
                    data={locales} />&nbsp;&nbsp;&nbsp;
                  <button
                    title="Export to Excel"
                    className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                    onClick={exportExcel}
                  >
                    Export to Excel
                  </button>&nbsp;
                  <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" onClick={exportPDF}>Export to PDF</button>
                </GridToolbar>
                {/* <GridColumn field="categoryName" title='Category Name' width="400px" /> */}
                <GridColumn field="roleName" title='Role Name' width="500px" />
                <GridColumn field="medium" title='Medium' width="500px" />
                <GridColumn field="examType" title='Exam Type' width="500px" />
              </Grid>
            </ExcelExport>
            <GridPDFExport
              ref={(element) => { _pdfExport = element; }}
              margin="1cm" >
              {<Grid data={process(orders, { skip: dataState.skip, take: dataState.take })} >
                <GridColumn field="categoryName" title='Category Name' width="400px" />
                <GridColumn field="roleName" title='Role Name' width="400px" />
                <GridColumn field="medium" title='Medium' width="350px" />
                <GridColumn field="examType" title='Exam Type' width="400px" />

              </Grid>}
            </GridPDFExport>
          </div>
        </IntlProvider>
      </LocalizationProvider>
    </div>
  )

}

export default DatatableTables;