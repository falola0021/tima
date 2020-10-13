import React from "react";
import { Modal } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Styles from "./Workflow.module.css";
import {
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

function WorkflowTable() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <p className={Styles.title}>Users</p>

      <Row className={Styles.tabrow}>
        <Col className={Styles.headtabs} sm="4">
          <div>All</div>
          <div>Admin</div>
          <div>HOD</div>
          <div>Normal User</div>
        </Col>
        <Col sm="4"></Col>
        <Col>
          <Form className={Styles.searchform}>
            <InputGroup inline>
              <FormControl
                className={Styles.formcontrol}
                size="lg"
                inline
                type="text"
                placeholder="Search by user name"
              />
              <InputGroup.Prepend className={Styles.searchicon}>
                <Button
                  size="lg"
                  type="submit"
                  className="fa fa-search"
                ></Button>
              </InputGroup.Prepend>
            </InputGroup>
          </Form>
        </Col>
      </Row>

      <div className={Styles.tablebox}>
        <Table responsive>
          <thead className={Styles.thead}>
            <tr>
              <th>
                <input className={Styles.checkbox} type="checkbox" />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>

          <tbody className={Styles.tbody}>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Anayo Kamali</td>
              <td>anayo.kamali@thegiggroupng.com</td>
              <td>09073737373</td>
              <td>HOD</td>
              <td className={Styles.action}>
                <div className={Styles.edit} onClick={() => setModalShow(true)}>
                  <i className="fa fa-edit"></i>
                  <span>Edit</span>
                </div>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                  <span>Delete</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Anayo Kamali</td>
              <td>anayo.kamali@thegiggroupng.com</td>
              <td>09073737373</td>
              <td>Normal User</td>
              <td className={Styles.action}>
                <div className={Styles.edit}>
                  <i className="fa fa-edit"></i>
                  <span>Edit</span>
                </div>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                  <span>Delete</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Anayo Kamali</td>
              <td>anayo.kamali@thegiggroupng.com</td>
              <td>09073737373</td>
              <td>Normal User</td>
              <td className={Styles.action}>
                <div className={Styles.edit}>
                  <i className="fa fa-edit"></i>
                  <span>Edit</span>
                </div>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                  <span>Delete</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Anayo Kamali</td>
              <td>anayo.kamali@thegiggroupng.com</td>
              <td>09073737373</td>
              <td>Normal User</td>
              <td className={Styles.action}>
                <div className={Styles.edit}>
                  <i className="fa fa-edit"></i>
                  <span>Edit</span>
                </div>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                  <span>Delete</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Anayo Kamali</td>
              <td>anayo.kamali@thegiggroupng.com</td>
              <td>09073737373</td>
              <td>User</td>
              <td className={Styles.action}>
                <div className={Styles.edit}>
                  <i className="fa fa-edit"></i>
                  <span>Edit</span>
                </div>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                  <span>Delete</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Anayo Kamali</td>
              <td>anayo.kamali@thegiggroupng.com</td>
              <td>09073737373</td>
              <td>Admin</td>
              <td className={Styles.action}>
                <div className={Styles.edit}>
                  <i className="fa fa-edit"></i>
                  <span>Edit</span>
                </div>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                  <span>Delete</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Anayo Kamali</td>
              <td>anayo.kamali@thegiggroupng.com</td>
              <td>09073737373</td>
              <td>User</td>
              <td className={Styles.action}>
                <div className={Styles.edit}>
                  <i className="fa fa-edit"></i>
                  <span>Edit</span>
                </div>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                  <span>Delete</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Anayo Kamali</td>
              <td>anayo.kamali@thegiggroupng.com</td>
              <td>09073737373</td>
              <td>User</td>
              <td className={Styles.action}>
                <div className={Styles.edit}>
                  <i className="fa fa-edit"></i>
                  <span>Edit</span>
                </div>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                  <span>Delete</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Anayo Kamali</td>
              <td>anayo.kamali@thegiggroupng.com</td>
              <td>09073737373</td>
              <td>User</td>
              <td className={Styles.action}>
                <div className={Styles.edit} onClick={() => setModalShow(true)}>
                  <i className="fa fa-edit"></i>
                  <span>Edit</span>
                </div>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                  <span>Delete</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Anayo Kamali</td>
              <td>anayo.kamali@thegiggroupng.com</td>
              <td>09073737373</td>
              <td>User</td>
              <td className={Styles.action}>
                <div className={Styles.edit}>
                  <i className="fa fa-edit"></i>
                  <span>Edit</span>
                </div>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                  <span>Delete</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Anayo Kamali</td>
              <td>anayo.kamali@thegiggroupng.com</td>
              <td>09073737373</td>
              <td>User</td>
              <td className={Styles.action}>
                <div className={Styles.edit}>
                  <i className="fa fa-edit"></i>
                  <span>Edit</span>
                </div>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                  <span>Delete</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Anayo Kamali</td>
              <td>anayo.kamali@thegiggroupng.com</td>
              <td>09073737373</td>
              <td>User</td>
              <td className={Styles.action}>
                <div className={Styles.edit}>
                  <i className="fa fa-edit"></i>
                  <span>Edit</span>
                </div>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                  <span>Delete</span>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default WorkflowTable;
