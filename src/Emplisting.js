import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EmpDetail from "./EmpDetail";
import { NavLink } from "react-router-dom";
import CachedIcon from "@mui/icons-material/Cached";
import { useNavigate } from "react-router-dom";

const Emplisting = () => {
  const [empdata, setEmpdata] = useState(null);
  const [selectedEmpDat, setSelectedEmpData] = useState({});
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };

  const RemoveFun = (id) => {
    //if (window.confirm("Do you want Delete?")) {
    fetch("http://localhost:8000/employee/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        //alert("Deleted Successfully.");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
    //}
  };

  const onClose = () => {
    setSelectedEmpData({});
    setOpen(false);
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })

      .then((resp) => {
        setEmpdata(resp);
      })

      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="card heading">
          <div className="card-title">
            <h2 className="heading">Additional Host Details</h2>
          </div>
          <div className="card-body">
            <div className="divbtn">
              <NavLink to="employee/create" className="btn btn-dark">
                +Add
              </NavLink>
            </div>

            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <td>S.No</td>
                  <td>Host Name</td>
                  <td>Alt Host Name</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {empdata &&
                  empdata.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.alt}</td>
                      <td>
                        <span className="btn">
                          <EditIcon
                            onClick={() => {
                              LoadEdit(item.id);
                            }}
                          />
                        </span>
                        <span className="btn">
                          <DeleteIcon
                            onClick={() => {
                              RemoveFun(item.id);
                            }}
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={() => onClose()}>
        <EmpDetail empdata={selectedEmpDat} />
      </Modal>
    </React.Fragment>
  );
};

export default Emplisting;
