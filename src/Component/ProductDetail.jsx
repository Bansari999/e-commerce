import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CartContext from "./CartContext";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$99.99",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$129.99",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$89.99",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 3",
  },
  {
    id: 4,
    name: "Product 4",
    price: "$79.99",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 4",
  },
  {
    id: 5,
    name: "Product 5",
    price: "$59.99",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 5",
  },
  {
    id: 6,
    name: "Product 6",
    price: "$49.99",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 6",
  },
  {
    id: 7,
    name: "Product 7",
    price: "$69.99",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 7",
  },
  {
    id: 8,
    name: "Product 8",
    price: "$109.99",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 8",
  },
  {
    id: 9,
    name: "Product 9",
    price: "$79.99",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 9",
  },
  {
    id: 10,
    name: "Product 10",
    price: "$89.99",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 10",
  },
  {
    id: 11,
    name: "Product 11",
    price: "$99.99",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 11",
  },
  {
    id: 12,
    name: "Product 12",
    price: "$69.99",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 12",
  },
  {
    id: 13,
    name: "Product 13",
    price: "$119.99",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 13",
  },
  {
    id: 14,
    name: "Product 14",
    price: "$129.99",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 14",
  },
  {
    id: 15,
    name: "Product 15",
    price: "$149.99",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 15",
  },
  {
    id: 16,
    name: "Product 16",
    price: "$79.99",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 16",
  },
  {
    id: 17,
    name: "Product 17",
    price: "$69.99",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 17",
  },
  {
    id: 18,
    name: "Product 18",
    price: "$99.99",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 18",
  },
  {
    id: 19,
    name: "Product 19",
    price: "$49.99",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 19",
  },
  {
    id: 20,
    name: "Product 20",
    price: "$79.99",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores dolores, error vero saepe labore enim natus laborum pariatur quod ullam reprehenderit quibusdam incidunt eaque rerum harum, sequi illo possimus dolorum officia voluptates delectus? Incidunt alias qui molestiae ipsam architecto velit at maiores minima illum enim, amet non ducimus impedit ipsa voluptates dolore omnis atque accusamus blanditiis voluptas error adipisci possimus dolorum recusandae? Cum ex vel, dicta vero sit quasi dolor temporibus saepe laboriosam quibusdam labore maiores autem aliquid porro odit, impedit ad! Aliquid hic voluptates sunt quo maiores eligendi quaerat impedit dolor fugiat? Debitis, ea itaque? Quibusdam facilis tempore nobis veritatis molestiae. Suscipit sed eius natus, numquam placeat temporibus? Quia placeat, quasi tenetur, ut ab cum dicta neque vel odio at numquam fugiat error animi tempore accusamus, eum consequuntur nobis optio autem! Esse quasi est sed deserunt quibusdam, harum inventore. Tempore minima magnam animi iusto iste enim. Molestiae, obcaecati. 20",
  },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartContext);
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingProduct = prevCartItems.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCartItems, { ...product, quantity: 1 }];
    });

    setSuccessMessage(`${product.name} added successfully!`);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
         <div className={`fixed inset-0 flex items-center justify-center bg-black/50 z-50 ${successMessage ? "block" : "hidden"}`}>
          <div className="bg-white shadow-lg rounded-lg p-5">
            <div className="mb-4 text-green-600 text-center font-bold">{successMessage}</div>
          </div>
        </div>
      <div className="w-5/6 p-2 rounded-lg flex flex-col md:flex-row">
        {product ? (
          <>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg md:w-1/2"
            />
            <div className="flex flex-col justify-center ml-0 md:ml-10 mt-4 md:mt-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                {product.name}
              </h2>
              <p className="mt-4 text-2xl font-semibold text-green-600">
                Price: {product.price}
              </p>
              <div className= "mt-5">
                <p className="text-xl text-justify">
                  Description: {product.description || "No description available."}
                </p>
              </div>
              <button onClick={() => handleAddToCart(product)} className="mt-4 block w-full px-4 py-2 bg-gray-900 text-white transition-colors hover:bg-gray-700 rounded-md">
                  Add to Cart
                </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-lg font-semibold">Product Not Found</h3>
            <p>Please check the URL or return to the product list.</p>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
