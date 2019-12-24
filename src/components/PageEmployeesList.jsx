import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchEmployeesModifyStore } from '../redux/actions'

const EmployeeLine = ({ employee }) => <div>{employee.name} ({employee.age} yrs old): {employee.company}</div>

class PageEmployeesList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEmployeesModifyStore();
  }

  render() {
    const { isLoading } = this.props;
    const { employees } = this.props;

    if(isLoading) {
      return <p>Loading ...</p>
    }
    
    return (
      <div>
        <h1>Employees List:</h1>
        {employees && employees.map((employee => <EmployeeLine key={employee._id} employee={employee} />))}
        <Link to="/new">
          <button>Create employee</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    employees: state.employees,//map store state to component prop
    isLoading:state.isLoading,
    error:state.error

  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchEmployeesModifyStore: employee => dispatch(fetchEmployeesModifyStore(employee))
  //prop           parameter    functionRedux   action           
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageEmployeesList)