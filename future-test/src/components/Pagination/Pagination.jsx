import React from 'react' 

const Pagination = () => {
    return (
        <nav aria-label="Page navigation example" className='justify-content-center'>
          <ul className="pagination justify-content-center lg">
            <li className="page-item">
              <button className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </button>
            </li>
            <li className="page-item"><button className="page-link" >1</button></li>
            <li className="page-item"><button className="page-link" href="#">2</button></li>
            <li className="page-item"><button className="page-link" href="#">3</button></li>
            <li className="page-item">
              <button className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </button>
            </li>
          </ul>
        </nav>
    )
}

export default Pagination