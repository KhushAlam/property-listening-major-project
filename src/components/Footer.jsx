export default function Footer() {
  return (
    <footer className="bg-secondary text-dark py-4 mt-auto shadow-top">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start gap-3">
          
          {/* Left Section - Always on top in mobile */}
          <div className="order-1 order-md-1">
            <p className="mb-0 fw-semibold small">
              &copy; 2025{" "}
              <span className="text-dark">Property Listing Platform</span>.  
              All rights reserved.
            </p>
          </div>

          {/* Right Section - Goes below on mobile */}
          <div className="order-2 order-md-2 text-md-end">
            <small className="text-muted">
              Built with{" "}
              <span className="fw-bold text-dark">React</span> &{" "}
              <span className="fw-bold text-dark">Spring Boot</span>{" "}
              <i className="bi bi-heart-fill text-danger"></i>
            </small>
          </div>

        </div>
      </div>
    </footer>
  );
}
