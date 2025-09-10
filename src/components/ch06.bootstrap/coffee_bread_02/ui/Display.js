import { Table } from "react-bootstrap";
import Display from './../css/Display.css';

function App({ product }) {

    return (
        <div className="mytable">
            <Table striped bordered hover >
                <tbody>
                    <tr>
                        <td align="center" width="40%">
                            <Table striped bordered hover >
                                <tbody>
                                    <tr>
                                        <td className="myleft">아이디</td>
                                        <td className="mymiddle">{product.id}</td>
                                    </tr>
                                    <tr>
                                        <td>이름</td>
                                        <td>{product.name}</td>
                                    </tr>
                                    <tr>
                                        <td>단가</td>
                                        <td>{product.price.toLocaleString()}원</td>
                                    </tr>
                                    <tr>
                                        <td>카테고리</td>
                                        <td>{product.category}</td>
                                    </tr>
                                    <tr>
                                        <td>재고</td>
                                        <td>{product.stock.toLocaleString()} 개</td>
                                    </tr>
                                </tbody>
                            </Table>

                        </td>
                        <td><img className="myimage" src={`/images/${product.image}`} alt={product.name} /></td>
                        <td ><p className="mydscrp">{product.description}</p></td>
                    </tr>
                </tbody>

            </Table>
        </div>


    );
};
export default App;