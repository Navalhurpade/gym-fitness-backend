import React from "react";

function Table({ collumns, rows }) {
  return (
    <div>
      <div class="limiter">
        <div class="container-table100">
          <div class="wrap-table100">
            <div class="table100">
              <table>
                <thead>
                  <tr class="table100-head">
                    {collumns.map((c) => (
                      <th className="column1">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {rows.map((r, indx) => (
                      <td key={indx} className="column1">
                        {r}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
