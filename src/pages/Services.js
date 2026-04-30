import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getServices, deleteService } from "../services/api";

function Services() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const loadServices = async () => {
    try {
      setLoading(true);
      const result = await getServices();
      setServices(result.data || []);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteService(id);
      loadServices();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <h2>Loading services...</h2>;
  }

  return (
    <div>
      <h2>Services</h2>

      <Link to="/services/add">Add Service</Link>

      {error && <p>{error}</p>}

      {services.length === 0 ? (
        <p>No services found.</p>
      ) : (
        services.map((service) => (
          <div key={service.id || service._id}>
            <h3>{service.title}</h3>
            <p>
              <strong>Description:</strong> {service.description}
            </p>

            <Link to={`/services/edit/${service.id || service._id}`}>Edit</Link>
            {" | "}
            <button onClick={() => handleDelete(service.id || service._id)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Services;