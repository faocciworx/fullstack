import React from 'react'

const userTable = () => {
  return (
    <div>
      		<table className="table table-striped table-hover">
			<thead>
				<tr className="header-title bg-white">
					<th>
						<span className="custom-checkbox">
							<input type="checkbox" id="selectAll" onChange={(e) => handleSelectAllChange(e)} checked={checkedAll} />
							<label htmlFor="selectAll"></label>
						</span>
					</th>
					<th>Name</th>
					<th>Email</th>
					<th>Description</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{/* <User setEditUser={setEditUser} handleDelete={handleDelete} /> */}
			</tbody>
		</table>
    </div>
  )
}

export default userTable
