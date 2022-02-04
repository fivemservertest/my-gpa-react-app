import { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { FaTrash } from 'react-icons/fa';

const styles = {
  textCenter: { textAlign: "center" },
  textRight: { textAlign: "right" },
};

function GradeTable({ data, setDataItems }) {
  const [dataRows, setDataRows] = useState();
  const [totalGPA, setTotalGPA] = useState(0);

  useEffect(() => {
    let sum = 0;
    let sub = [];

    const z = data.map((v, i) => {
      let amountGpa = Number(v.gpa);

      sum += amountGpa;
      sub.push(amountGpa);

      return (
        <tr key={i}>
          <td style={styles.textCenter}><FaTrash onClick={() => deleteClick(i)}/></td>
          <td style={styles.textCenter}>{v.sem}/{v.year}</td>
          <td><b>{v.subid}</b><br></br>{v.sub}</td>
          <td style={styles.textCenter}>{v.grd}</td>
          <td style={styles.textCenter}>{v.gpa}</td>
        </tr>
      );
    });

    setDataRows(z);
    setTotalGPA(sum/sub.length);

  }, [data]);

  const deleteClick = (i) => {
    data.splice(i,1)
    setDataItems([...data])
  }

  // const numberWithCommas = (x) => {
  //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // };

  const clearTable = () => {
    setDataItems([]);
    setDataRows([]);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>My GPA</h1>
        </Col>
        <Col style={styles.textRight}>
          <Button onClick={clearTable} variant="dark">
            Clear
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th style={styles.textCenter}>Semester</th>
            <th style={styles.textCenter}>Subject</th>
            <th style={styles.textCenter}>Grade</th>
            <th style={styles.textCenter}>GPA</th>
          </tr>
        </thead>
        <tbody>{dataRows}</tbody>
        <tfoot>
        <tr>
            <th colSpan={3}></th>
            <th style={styles.textCenter}>GPAC</th>
            <th style={styles.textCenter}>{Number(totalGPA).toFixed(2)}</th>
        </tr>
        </tfoot>
      </Table>
    </Container>
  );
}

export default GradeTable;
