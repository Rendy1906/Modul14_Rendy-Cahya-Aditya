import Table from 'react-bootstrap/Table';
import './table.css'

function DarkExample() {
    return (
        <Table striped bordered hover variant="secondary">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Subtitle</th>
                    <th>ISBN13</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>URL</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td><h3>Deno Succinctly</h3></td>
                        <td><h3> </h3></td>
                        <td><p>9781642002140</p></td>
                        <td><p>$0.00</p></td>
                        <td><img src="https://itbook.store/img/books/9781642002140.png" alt="Deno Succinctly"></img></td>
                        <td><a href="https://itbook.store/books/9781642002140">More Info</a></td>
                    </tr>
                    <tr>
                        <td><h3>Robotics, AI, and Humanity</h3></td>
                        <td><h3>Science, Ethics, and Policy</h3></td>
                        <td><p>9783030541729</p></td>
                        <td><p>$59.99</p></td>
                        <td><img src="https://itbook.store/img/books/9783030541729.png" alt="Deno Succinctly"></img></td>
                        <td><a href="https://itbook.store/books/9783030541729">More Info</a></td>
                    </tr>
                    <tr>
                        <td><h3>Introduction to Autonomous Robots, 3rd Edition</h3></td>
                        <td><h3> </h3></td>
                        <td><p>9781493773077</p></td>
                        <td><p>$20.99</p></td>
                        <td><img src="https://itbook.store/img/books/9781493773077.png" alt="Deno Succinctly"></img></td>
                        <td><a href="https://itbook.store/books/9781493773077">More Info</a></td>
                    </tr>
                    <tr>
                        <td><h3>Learning Go</h3></td>
                        <td><h3>An Idiomatic Approach to Real-World Go Programming</h3></td>
                        <td><p>9781492077213</p></td>
                        <td><p>$35.88</p></td>
                        <td><img src="https://itbook.store/img/books/9781492077213.png" alt="Deno Succinctly"></img></td>
                        <td><a href="https://itbook.store/books/9781492077213">More Info</a></td>
                    </tr>
                    <tr>
                        <td><h3>Open Workbook of Cryptology</h3></td>
                        <td><h3>A project-based Introduction to crypto in Python</h3></td>
                        <td><p>1001656678502</p></td>
                        <td><p>$0.00</p></td>
                        <td><img src="https://itbook.store/img/books/1001656678502.png" alt="Deno Succinctly"></img></td>
                        <td><a href="https://itbook.store/books/1001656678502">More Info</a></td>
                    </tr>
                </tbody>
        </Table>
    );
}

export default DarkExample;