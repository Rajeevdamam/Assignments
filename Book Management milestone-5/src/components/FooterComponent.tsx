import React from "react";

interface Props {}

const FooterComponent = (props: Props) => {
	return (
		<div>
			<footer
				className="page-footer font-small pt-4"
				style={{ color: "white", background: "	rgb(40,40,40)", marginTop: "5%" }}
			>
				<div className="container-fluid text-center text-md-left">
					<div className="row">
						<div className="col-md-6 mt-md-0 mt-3">
							<h5 className="text-uppercase">Book Management</h5>
							<p>Here you can view, Add or Delete books if logged in</p>
						</div>

						<hr className="clearfix w-100 d-md-none pb-3" />

						<div className="col-md-3 mb-md-0 mb-3">
							<h5 className="text-uppercase">Links</h5>

							<ul className="list-unstyled">
								<li>
									<a href="#!">About</a>
								</li>
								<li>
									<a href="#!">Privacy Policy</a>
								</li>
								<li>
									<a href="#!">Terms & Conditions</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="footer-copyright text-center py-3">
					© 2018 Copyright: BookApps
				</div>
			</footer>
		</div>
	);
};

export default FooterComponent;
