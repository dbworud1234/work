import React, { useState } from 'react';

function Memo() {
    const [rows, setRows] = useState([]);
    const [edit, setEdit] = useState(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    const changeText_date = id => e => {
        const {
            target: { value }
        } = e;

        const tempRows = rows.map(row => {
            if (row.id === id + 1) {
                row["date"] = value;
            }
            return row;
        });
        setRows(tempRows);
    };

    const changeText_start = id => e => {
        const {
            target: { value }
        } = e;

        const tempRows = rows.map(row => {
            if (row.id === id + 1) {
                row["start"] = value;
            }
            return row;
        });
        setRows(tempRows);
    };

    const changeText_end = id => e => {
        const {
            target: { value }
        } = e;

        const tempRows = rows.map(row => {
            if (row.id === id + 1) {
                row["end"] = value;
            }
            return row;
        });
        setRows(tempRows);
    };

    const changeText_place = id => e => {
        const {
            target: { value }
        } = e;

        const tempRows = rows.map(row => {
            if (row.id === id + 1) {
                row["walk"] = value;
            }
            return row;
        });
        setRows(tempRows);
    };

    const addRow = () => {
        let data = {
            id: rows.length + 1,
            date: "",
            walk: "",
            start: "",
            end: "",
        };
        setRows([...rows, data]);
    };

    const allDeleteRow = () => {
        setRows([]);
    }

    const deleteRow = id => () => {
        let tempRows = rows.filter(row => {
            return row.id !== id + 1;
        });
        setRows(tempRows);
    }

    const display = () => {
        console.log(rows);
    };
    if (edit) {
        return (
            <div>
                <h3>산책했던 장소와 시간을 기록해보세요 !</h3>
                <div style={memoStyle}>
                    {rows.length === 0 && (
                        <button style={cursorStyle} onClick={handleToggleEdit}>추가 및 수정</button>
                    )}
                    {rows.length !== 0 && (
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>날짜</th>
                                    <th>시작시간</th>
                                    <th>종료시간</th>
                                    <th>산책 코스</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((d, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td style = {td1_style}>
                                            {d.date}
                                        </td>
                                        <td style = {td1_style}>
                                            {d.start}
                                        </td>
                                        <td style = {td1_style}>
                                            {d.end}
                                        </td>
                                        <td style = {td2_style}>
                                            {d.walk}
                                        </td>
                                        <td>
                                            <button style={cursorStyle} onClick={handleToggleEdit}>추가 및 수정</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        )
    }
    
    return (
        <div>
            <h3>산책했던 장소와 시간을 기록해보세요 !</h3>
            <div style={memoStyle}>
                {rows.length !== 0 && (
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>날짜</th>
                                <th>시작시간</th>
                                <th>종료시간</th>
                                <th>산책 코스</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((d, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>
                                        <input type="date" style={cursorStyle}
                                            onChange={changeText_date(i)}
                                            value={d.date} />
                                    </td>
                                    <td>
                                        <input type="time" style={cursorStyle}
                                            onChange={changeText_start(i)}
                                            value={d.start} />
                                    </td>
                                    <td>
                                        <input type="time" style={cursorStyle}
                                            onChange={changeText_end(i)}
                                            value={d.end} />
                                    </td>
                                    <td>
                                        <input type="text"
                                            onChange={changeText_place(i)}
                                            value={d.walk} style={placeStyle}
                                            placeholder="산책다닌 장소를 입력해주세요 ! ex : ㅇㅇㅇ공원"
                                        />
                                    </td>
                                    <td>
                                        <button style={cursorStyle} onClick={deleteRow(i)}>삭제</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            <button style={cursorStyle} onClick={addRow}>추가</button>
            <button style={cursorStyle} onClick={allDeleteRow}>초기화</button>
            <button style={cursorStyle} onClick={handleToggleEdit}>확인</button>
            <button style={cursorStyle} onClick={display}>콘솔 출력</button>
        </div>
    )
}

export default Memo;

const tableStyle = {
    marginLeft: "auto",
    marginRight: "auto"
}
const placeStyle = {
    cursor: "pointer",
    width: "400px",
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
}
const memoStyle = {
    margin: "0 auto",
    width: "50%",
    border: "1px solid #a8ff78"
}
const td1_style = {
    width: "100px"
}
const td2_style = {
    width: "auto"
}
const cursorStyle = {
    padding: ".440rem .75rem",
    background: "#FFFF92",
    border: 0,
    outline: 0,
    cursor: "pointer"
}