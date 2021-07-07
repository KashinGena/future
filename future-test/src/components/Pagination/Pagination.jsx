import React from 'react' 

const Pagination = () => {
    return (
        <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <button class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </button>
    </li>
    <li class="page-item"><button class="page-link" >1</button></li>
    <li class="page-item"><button class="page-link" href="#">2</button></li>
    <li class="page-item"><button class="page-link" href="#">3</button></li>
    <li class="page-item">
      <button class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </button>
    </li>
  </ul>
</nav>
    )
}

export default Pagination