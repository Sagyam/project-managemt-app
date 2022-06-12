import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

function AddClientModal() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();

	const [addClient] = useMutation(ADD_CLIENT, {
		variables: { name, email, phone },
		refetchQueries: [{ query: GET_CLIENTS }],
	});

	const onSubmit = (e) => {
		e.preventDefault();
		if (!name || !email || !phone) {
			return alert("Please fill in all fields");
		}

		addClient();
		setName("");
		setEmail("");
		setPhone("");
	};

	return (
		<>
			<button
				type="button"
				className="btn btn-secondary"
				data-bs-toggle="modal"
				data-bs-target="#addClientModal"
			>
				<div className="d-flex aling-items-center">
					<FaUserPlus className="icon" />
					Add Client
				</div>
			</button>

			<div
				className="modal fade"
				id="addClientModal"
				tabIndex="-1"
				aria-labelledby="addClientModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="addClientModalLabel">
								Add New Client
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<form onSubmit={onSubmit}>
								<div className="mb-3">
									<label htmlFor="name">Name</label>
									<input
										type="text"
										className="form-control"
										id="name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										required
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										className="form-control"
										id="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="phone">Phone</label>
									<input
										type="text"
										className="form-control"
										id="phone"
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										required
									/>
								</div>
								<button
									className="btn btn-secondary"
									type="submit"
									data-bs-dismiss="modal"
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddClientModal;
