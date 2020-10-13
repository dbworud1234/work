import React, { useState } from 'react';


function Wish() {
    const [rows, setRows] = useState([]);
    const [edit, setEdit] = useState(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    }

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

    if (edit) {
        return (
            <>
                <h3>산책가고 싶은 장소를 입력해보세요 !</h3>
                <div style={memoStyle}>
                    {rows.length === 0 && (
                        <button style={cursorStyle} onClick={handleToggleEdit}>추가 및 수정</button>
                    )}
                    {rows.length !== 0 && (
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>장소</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((d, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>
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
            </>
        )
    }

    return (
        <>
            <h3>산책가고 싶은 장소를 입력해보세요 !</h3>
            <div style={memoStyle}>
                {rows.length !== 0 && (
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>장소</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((d, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>
                                        <input type="text"
                                            onChange={changeText_place(i)}
                                            value={d.walk} style={placeStyle}
                                            placeholder="가고 싶은 장소를 입력해주세요 ! ex : ㅇㅇㅇ공원"
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
        </>
    )
}

export default Wish;

const tableStyle = {
    marginLeft: "auto",
    marginRight: "auto"
}
const placeStyle = {
    cursor: "pointer",
    width: "400px"
}
const memoStyle = {
    margin: "0 auto",
    width: "50%",
    border: "1px solid #a8ff78"
}
const cursorStyle = {
    cursor: "pointer"
}