import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GradeTable from "./GradeTable";

import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";

import useLocalStorage from 'react-localstorage-hook'

function App() {
  const yearRef = useRef();
  const semesterRef = useRef();
  const subRef = useRef();
  const gradeRef = useRef();
  const gpaRef = useRef();

  // const [dataItems, setDataItems] = useState([]);
  const [dataItems, setDataItems] = useLocalStorage("dataItems",[]);

  //year
  const yearList = [
    { id: "y01", name: "2019"},
    { id: "y02", name: "2020"},
    { id: "y03", name: "2021"},
    { id: "y04", name: "2022"},
  ];

    //semester
    const semList = [
      { id: "s1", name: "1"},
      { id: "s2", name: "2"},
      { id: "s3", name: "3"},
    ];

    //subject
    const subjectList = [
      { id: "BG 1001", name: "English I", group: "Language Courses"},
      { id: "BG 1002", name: "English II", group: "Language Courses"},
      { id: "BG 2000", name: "English III", group: "Language Courses"},
      { id: "BG 2001", name: "English IV", group: "Language Courses"},

      { id: "LAW 1201", name: "Business Laws for Entrepreneurs", group: "Humanities Courses"},
      
      { id: "GE 2202", name: "Ethics", group: "Social Science Courses"},
      { id: "BBA 1001", name: "Business Exploration", group: "Social Science Courses"},

      { id: "BAC 1602", name: "Fundamentals of Financial Accounting I", group: "Science and Mathemetics Courses"},
      { id: "CSX 1001", name: "Basic Mathematics and Statistics", group: "Science and Mathemetics Courses"},

      { id: "GE 1103", name: "Historical Perspectives on Thailand", group: "General Education Courses"},
      { id: "GE 1102", name: "Introduction to Philosophy", group: "General Education Courses"},
      { id: "GE 2102", name: "Human Heritage and Globalization", group: "General Education Courses"},
      { id: "GE 2103", name: "Art of Reasoning", group: "General Education Courses"},
      { id: "GE 2104", name: "Thai Buddhism", group: "General Education Courses"},
      { id: "GE 2105", name: "Introduction to World Religion", group: "General Education Courses"},
      { id: "GE 2106", name: "Logical Thinking and Application", group: "General Education Courses"},
      { id: "GE 2107", name: "Applied Philosophy in Social Sciences and Humanities", group: "General Education Courses"},
      { id: "BBA 2001", name: "Human Behavior", group: "General Education Courses"},
      { id: "GE 1207", name: "Fundamental Psychology", group: "General Education Courses"},
      { id: "GE 1203", name: "Society, Politics and Economics", group: "General Education Courses"},
      { id: "GE 1205", name: "ASEAN Ways", group: "General Education Courses"},
      { id: "GE 1206", name: "Philosophy of Sufficiency Economy", group: "General Education Courses"},
      { id: "GE 2203", name: "Art of Living", group: "General Education Courses"},
      { id: "GE 2205", name: "Communication and Multicultural society", group: "General Education Courses"},
      { id: "GE 2206", name: "Personality Development", group: "General Education Courses"},
      { id: "GE 2207", name:"Sport, Health and Wellness Development", group: "General Education Courses"},
      { id: "GE 2208", name: "Thai Politics and Government", group: "General Education Courses"},
      { id: "BEC 2200", name: "Introduction to Economics", group: "General Education Courses"},
      { id: "GE 1302", name: "Ecology and Sustainability", group: "General Education Courses"},
      { id: "GE 2301", name: "Lifestyles in Dynamic World", group: "General Education Courses"},
      { id: "GE 2302", name: "Climate Change and Human Life", group: "General Education Courses"},
      { id: "GE 2303", name: "Building Brilliant Brain", group: "General Education Courses"},
      { id: "MA 1200", name: "Mathematics for Business", group: "General Education Courses"},
      { id: "GE 1403", name: "Communication in Thai", group: "General Education Courses"},
      { id: "GE 1405", name: "Thai Language and Culture", group: "General Education Courses"},
      { id: "GE 1406", name: "Burmese Language", group: "General Education Courses"},
      { id: "GE 1407", name: "Russian Language", group: "General Education Courses"},
      { id: "GE 3401", name: "Public Speaking in Thai", group: "General Education Courses"},
    ];

    //Grade
    const gradetList = [
      { id: "g01", name: "A", gpa: 4},
      { id: "g02", name: "A-", gpa: 3.75},
      { id: "g03", name: "B+", gpa: 3.25},
      { id: "g04", name: "B", gpa: 3},
      { id: "g05", name: "B-", gpa: 2.75},
      { id: "g06", name: "C+", gpa: 2.25},
      { id: "g07", name: "C", gpa: 2},
      { id: "g08", name: "C-", gpa: 1.75},
      { id: "g09", name: "D", gpa: 1},
      { id: "g10", name: "F", gpa: 0},
      { id: "g11", name: "W", gpa: 0},
      { id: "g12", name: "I", gpa: 0},
      { id: "g13", name: "S", gpa: 0},
      { id: "g14", name: "U", gpa: 0},
      { id: "g15", name: "R", gpa: 0},
      { id: "g16", name: "TR", gpa: 0},
    ];

  const addItem = () => {
    if (yearRef.current.value == "") {
      alert("Year is empty");
      return;
    }

    if (semesterRef.current.value == "") {
      alert("Semester is empty");
      return;
    }

    if (subRef.current.value == "") {
      alert("Subject is empty");
      return;
    }

    if (gradeRef.current.value == "" || gpaRef.current.value == "") {
      alert("Please select your grade.");
      return;
    }

    const yearid = yearRef.current.value;
    const year = yearList.find((e) => e.id === yearid);

    const semesterid = semesterRef.current.value;
    const semester = semList.find((e) => e.id === semesterid);

    const subid = subRef.current.value;
    const subject = subjectList.find((e) => e.id === subid);

    const gradeid = gradeRef.current.value;
    const grade = gradetList.find((e) => e.id === gradeid);

    var itemObj = {
      yid: yearid,
      year: year.name,
      semesterid: semesterid,
      sem: semester.name,
      subid: subid,
      sub: subject.name,
      gid: gradeid,
      grd: grade.name,
      gpa: gpaRef.current.value,
    };

    dataItems.push(itemObj);
    setDataItems([...dataItems]);   
  };

  const gradeChange = (e) => {
    const gid = gradeRef.current.value;
    const grade = gradetList.find((e) => e.id === gid);
    gpaRef.current.value = grade.gpa
  }

  const optionsYear = yearList.map((v) => {
    return <option value={v.id}>{v.name}</option>;
  });

  const optionsSem = semList.map((v) => {
    return <option value={v.id}>{v.name}</option>;
  });

  const optionsSub = subjectList.map((v) => {
    return <option value={v.id}>{v.name}</option>;
  });

  const optionsGrade = gradetList.map((v) => {
    return <option value={v.id}>{v.name}</option>;
  });

  const listGroup = subjectList.map((d) => <p key={d.group}>{d.group}</p>);
  const listCode = subjectList.map((d) => <p key={d.id}>{d.id}</p>);
  const listSubject = subjectList.map((d) => <p key={d.name}>{d.name}</p>);

  return (
    <Container>
      <p> </p>
      <Row>
        <Col xs={5} style={{ backgroundColor: "#eaeaea" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formYear">
              <Form.Label>Year</Form.Label>
              <Form.Select
                aria-label="Default select example"
                ref={yearRef}
              >
                {optionsYear}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSemester">
              <Form.Label>Semester</Form.Label>
              <Form.Select
                aria-label="Default select example"
                ref={semesterRef}
              >
                {optionsSem}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Select
                aria-label="Default select example"
                ref={subRef}
              >
                {optionsSub}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGrade">
              <Form.Label>Grade</Form.Label>
              <Form.Select
                aria-label="Default select example"
                ref={gradeRef}
                onChange={gradeChange}
              >
                {optionsGrade}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGpa">
              <Form.Label>GPA</Form.Label>
              <Form.Control
                type="number"
                placeholder="GPA"
                ref={gpaRef}
              />
            </Form.Group>

            <Button variant="outline-dark" onClick={addItem}>
              Add
            </Button>
          </Form>
        </Col>
        <Col>
          <GradeTable data={dataItems} setDataItems={setDataItems} />
        </Col>
      </Row>

      <p></p>
      <br />
      <Row>
        <h2>Curriculum</h2>
      </Row>
      <Table>
        <thead>
          <tr>      
            <th>Group</th>
            <th>Code</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{listGroup}</td>
            <td>{listCode}</td>
            <td>{listSubject}</td>
          </tr>
        </tbody>
      </Table>

    </Container>
  );
}

export default App;
