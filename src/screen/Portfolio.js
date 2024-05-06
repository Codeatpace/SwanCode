import '../App.css';
import React, { useState, useEffect } from 'react';
import '../App.css';
import * as XLSX from 'xlsx'
import ApexCharts from 'apexcharts'
import Sidebar from '../component/Sidebar';

const Portfolio = () => {
  const [data, setData] = useState([]); // State to store chart data
  const [fromDate, setFromDate] = useState(''); // State for 'from' date
  const [toDate, setToDate] = useState(''); // State for 'to' date
  const [options, setOptions] = useState({
    chart: {
      type: 'line'
    },
    series: [
      {
        name: 'sales',
        data: [30, 40, 35, 50]
      }
    ],
    xaxis: {
      categories: [1991, 1992, 1993, 1994]
    }
  });
  // Function to fetch and process data from Excel sheet
  const fetchData = async () => {
    try {
      const workbook = await XLSX.read('./React Assignment Historical NAV Report (1) (1).xlsx', { type: 'binary' });
      console.log('Workbook object:', workbook); // Check if workbook contains sheets

      if (workbook) {
        const sheetName = workbook.SheetNames[0]; // Assuming first sheet
        console.log('Sheet names:', workbook.SheetNames); // Verify "Mutual Funds India Historical N" exists

        const worksheet = workbook.Sheets[sheetName];
        if (worksheet) {
          console.log('Worksheet object:', worksheet); // Check if worksheet contains data
        } else {
          console.error('Sheet not found:', sheetName);
        }
      } else {
        console.error('Error reading workbook');
      }
      const sheetName = workbook.SheetNames[0]; // Assuming first sheet
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet); // Convert sheet to JSON

      console.log('Excel data:', jsonData)
      // Process data for equity curve and drawdown (implementation provided)
      // const processedData = processDataForChart(jsonData);

      // setData(processedData); // Update data state
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  };
  const resetCall = () => {
    console.log("Reset Button Clicked")
    // window.location.reload();
    setFromDate('')
    setToDate('')

  }

  // Fetch data on component mount
  useEffect(() => {
    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();
    fetchData();
  }, []);
  return (
    <>
      <div className='body'>
        <div>
          <Sidebar />
        </div>
        <div className='middlePartt'>
          <div className='container containerr'>
            <div className='row'>
              <div className='trailing'>
                <div>
                  <h4>Trailing Returns</h4>
                </div><br /><br />
                <div>
                  <p className='download'><i class="fa-solid fa-download"></i></p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='tablee'>
                <table cellspacing="10px">
                  <thead>
                    <th>NAME</th>
                    <th>YTD</th>
                    <th>1D</th>
                    <th>1W</th>
                    <th>1M</th>
                    <th>3M</th>
                    <th>6M</th>
                    <th>1Y</th>
                    <th>3Y</th>
                    <th>SI</th>
                    <th>DD</th>
                    <th>MAXDD</th>
                  </thead>
                  <tr>
                    <td>Focused</td>
                    <td>-1.7%</td>
                    <td>-1.7%</td>
                    <td>-1.7%</td>
                    <td>-1.7%</td>
                    <td>-1.7%</td>
                    <td>-1.7%</td>
                    <td>-1.7%</td>
                    <td>-1.7%</td>
                    <td>-1.7%</td>
                    <td>-1.7%</td>
                    <td>-1.7%</td>
                  </tr>
                  <tr>
                    <td>
                      NIFTY50
                    </td>
                    <td>
                      1.2%
                    </td>
                    <td>
                      1.2%
                    </td>
                    <td>
                      1.2%
                    </td>
                    <td>
                      1.2%
                    </td>
                    <td>
                      1.2%
                    </td>
                    <td>
                      1.2%
                    </td>
                    <td>
                      1.2%
                    </td>
                    <td>
                      1.2%
                    </td>
                    <td>
                      1.2%
                    </td>
                    <td>
                      1.2%
                    </td>
                    <td>
                      1.2%
                    </td>

                  </tr>
                </table>
              </div>
            </div><br /><br />
            <div className='row'>
              <div className='headingg'>
                <div><h4>Equity curve</h4>
                  <p>Live since 2019-01-01 &nbsp;&nbsp;&nbsp;  <button onClick={resetCall} type="reset" style={{ border: "none", color: "darkgreen", fontFamily: "monospace" }}><i class="fa-solid fa-circle-notch"></i>&nbsp;Reset</button></p>
                </div>
                <div>
                  <div className='dates'>
                    <h6 className='date'>From date</h6>
                    <h6 className='date todate'>To date</h6>
                  </div>
                  <input value={fromDate} onChange={(event) => setFromDate(event.target.value)} style={{ marginRight: "2px" }} type='text'></input>
                  <input value={toDate} onChange={(event) => setToDate(event.target.value)} type='text'></input>
                </div>

              </div>
            </div>
            <div className='row'>
              <div id="chart" style={{ height: "50px" }}></div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio