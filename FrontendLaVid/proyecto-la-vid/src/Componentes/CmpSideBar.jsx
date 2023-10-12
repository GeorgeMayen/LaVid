import React from "react";
import { Link } from "react-router-dom";

function CmpSideBar() {
  return (
    <nav className="w-52  min-h-screen flex flex-col text-2xl bg-blue-950  text-white">
      <div className="w-full text-left flex items-center justify-center p-5 ">
        <img
          className="w-20 h-20"
          src={require(`../Imagenes/LogoIdec.png`)}
          alt="Logo idec"
        />
      </div>
      <ul className="px-1">
        <Link
          to="/Erp/CmpMiembros"
        >
          <li className="flex flex-row gap-2 justify-center items-center font-semibold hover:text-blue-950 hover:bg-white py-5 bg-blue-950 ">
            <svg
              className="w-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7C11 9.20914 9.20914 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3C9.20914 3 11 4.79086 11 7ZM4.97715 7C4.97715 8.11719 5.88281 9.02284 7 9.02284C8.11719 9.02284 9.02284 8.11719 9.02284 7C9.02284 5.88281 8.11719 4.97716 7 4.97716C5.88281 4.97716 4.97715 5.88281 4.97715 7Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.37162 14.2378C3.54371 13.3886 5.09751 13 7 13C8.90249 13 10.4563 13.3886 11.6284 14.2378C12.8188 15.1004 13.4914 16.3477 13.795 17.8079C14.1811 19.6647 12.5708 21 11 21H3C1.42922 21 -0.181121 19.6647 0.204962 17.8079C0.508602 16.3477 1.18119 15.1004 2.37162 14.2378ZM3.54511 15.8574C2.84896 16.3618 2.39073 17.1203 2.16308 18.2151C2.12425 18.4018 2.17618 18.5729 2.31828 18.7223C2.47041 18.8824 2.71717 19 3 19H11C11.2828 19 11.5296 18.8824 11.6817 18.7223C11.8238 18.5729 11.8757 18.4018 11.8369 18.2151C11.6093 17.1203 11.151 16.3618 10.4549 15.8574C9.74039 15.3397 8.65185 15 7 15C5.34815 15 4.25961 15.3397 3.54511 15.8574Z"
                fill="currentColor"
              />
              <path
                d="M21 7C21 9.20914 19.2091 11 17 11C14.7909 11 13 9.20914 13 7C13 4.79086 14.7909 3 17 3C19.2091 3 21 4.79086 21 7ZM14.9772 7C14.9772 8.11719 15.8828 9.02284 17 9.02284C18.1172 9.02284 19.0228 8.11719 19.0228 7C19.0228 5.88281 18.1172 4.97716 17 4.97716C15.8828 4.97716 14.9772 5.88281 14.9772 7Z"
                fill="currentColor"
              />
              <path
                d="M14.5361 13.2689C13.9347 13.4165 13.7248 14.1168 14.0647 14.6344L14.1075 14.6995C14.3593 15.0829 14.839 15.239 15.2891 15.1501C15.7787 15.0534 16.3451 15 17 15C18.6519 15 19.7404 15.3397 20.4549 15.8574C21.1511 16.3618 21.6093 17.1203 21.8369 18.2151C21.8758 18.4018 21.8238 18.5729 21.6817 18.7223C21.5296 18.8824 21.2828 19 21 19H16C15.4478 19 15 19.4477 15 20C15 20.5523 15.4478 21 16 21H21C22.5708 21 24.1811 19.6647 23.7951 17.8079C23.4914 16.3477 22.8188 15.1004 21.6284 14.2378C20.4563 13.3886 18.9025 13 17 13C16.0994 13 15.2769 13.0871 14.5361 13.2689Z"
                fill="currentColor"
              />
            </svg>
            Miembros
          </li>
        </Link>
        <Link
        to="/Erp/CmpOfrendas"
        >
          <li className="flex flex-row gap-2 justify-center items-center font-semibold hover:text-blue-950 hover:bg-white py-5 bg-blue-950 ">
            <svg
              className="w-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1C11.4477 1 11 1.44772 11 2V3H10C8.3642 3 7.0588 3.60369 6.1691 4.57428C5.29413 5.52878 4.875 6.77845 4.875 8C4.875 9.22155 5.29413 10.4712 6.1691 11.4257C6.33335 11.6049 6.51177 11.7716 6.70382 11.9243C7.55205 12.5986 8.6662 13 10 13H11V19H10C9.17499 19 8.62271 18.7966 8.2422 18.5429C7.85544 18.2851 7.58511 17.9342 7.39443 17.5528C7.20178 17.1675 7.10048 16.7701 7.04889 16.4606C7.02329 16.307 7.00411 16.1512 6.99999 15.9953C6.99736 15.4454 6.55059 15 6 15C5.44771 15 5 15.4477 5 16C5.00003 16.0672 5.0024 16.1317 5.01035 16.2431C5.02006 16.3791 5.039 16.5668 5.07611 16.7894C5.14952 17.2299 5.29821 17.8325 5.60557 18.4472C5.91489 19.0658 6.39456 19.7149 7.1328 20.2071C7.8773 20.7034 8.82502 21 10 21H11V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V21H14C15.6358 21 16.9412 20.3963 17.8309 19.4257C18.7059 18.4712 19.125 17.2216 19.125 16C19.125 14.7784 18.7059 13.5288 17.8309 12.5743C16.9412 11.6037 15.6358 11 14 11H13V5H14C14.825 5 15.3773 5.20338 15.7578 5.45705C16.1446 5.71489 16.4149 6.06584 16.6056 6.44721C16.7982 6.8325 16.8995 7.22989 16.9511 7.5394C16.9767 7.69303 16.9959 7.84879 17 8.00465C17.0027 8.55467 17.4494 9 18 9C18.5458 9 19 8.54436 19 7.99898C18.9999 7.93212 18.9976 7.8677 18.9896 7.75688C18.9799 7.62092 18.961 7.43322 18.9239 7.2106C18.8505 6.77011 18.7018 6.1675 18.3944 5.55279C18.0851 4.93416 17.6054 4.28511 16.8672 3.79295C16.1227 3.29662 15.175 3 14 3H13V2C13 1.44772 12.5523 1 12 1ZM11 5H10C8.8858 5 8.1287 5.39631 7.6434 5.92572C7.14337 6.47122 6.875 7.22155 6.875 8C6.875 8.77845 7.14337 9.52878 7.6434 10.0743C8.1287 10.6037 8.8858 11 10 11H11V5ZM13 13V19H14C15.1142 19 15.8713 18.6037 16.3566 18.0743C16.8566 17.5288 17.125 16.7784 17.125 16C17.125 15.2216 16.8566 14.4712 16.3566 13.9257C15.8713 13.3963 15.1142 13 14 13H13Z"
                fill="currentColor"
              />
            </svg>
            Ofrendas
          </li>
        </Link>
        <Link
        to="/"
        >
          <li className="flex flex-row gap-2 justify-center items-center font-semibold hover:text-blue-950 hover:bg-white py-5 bg-blue-950 ">
            <svg
               className="w-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 23H11C10.4477 23 10 22.5523 10 22C10 21.4477 10.4477 21 11 21H19C19.5523 21 20 20.5523 20 20V4C20 3.44772 19.5523 3 19 3L11 3C10.4477 3 10 2.55229 10 2C10 1.44772 10.4477 1 11 1L19 1C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.48861 13.3099C1.83712 12.5581 1.83712 11.4419 2.48862 10.6902L6.66532 5.87088C7.87786 4.47179 10.1767 5.32933 10.1767 7.18074L10.1767 9.00001H16.1767C17.2813 9.00001 18.1767 9.89544 18.1767 11V13C18.1767 14.1046 17.2813 15 16.1767 15L10.1767 15V16.8193C10.1767 18.6707 7.87786 19.5282 6.66532 18.1291L2.48861 13.3099ZM4.5676 11.3451C4.24185 11.7209 4.24185 12.2791 4.5676 12.6549L8.1767 16.8193V14.5C8.1767 13.6716 8.84827 13 9.6767 13L16.1767 13V11L9.6767 11C8.84827 11 8.1767 10.3284 8.1767 9.50001L8.1767 7.18074L4.5676 11.3451Z"
                fill="currentColor"
              />
            </svg>
            Salir
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default CmpSideBar;