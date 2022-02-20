import Link from "next/link";

const ClientPage = () => {

  const clients = [
    {id: 'max', name: 'Maximillian'},
    {id: 'manu', name: 'Manuel'},
  ];

  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.name}>
            <Link href={`/client/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
      {/* alternative method */}
      <ul>
        {clients.map((client) => (
          <li key={client.name}>
            <Link 
              href={{
                pathname: "/client/[id]",
                query: {id: client.id}
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;

// http://localhost:3000/client
