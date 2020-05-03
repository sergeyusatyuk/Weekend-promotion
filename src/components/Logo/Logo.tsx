import React from "react";
import "./Logo.css";

export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 310 77"
      width="310"
      height="77"
    >
      <defs>
        <image
          width="77"
          height="77"
          id="img1"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABNCAMAAADU1xmCAAAAAXNSR0IB2cksfwAAAWhQTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////WxEJRwAAAHh0Uk5TADaap1Jd+P+KXv2N/IySBl/NCPkzA2euC75ZDLn7KmA7Lv7vGeIx8x7xyTSqwG/rCsYB9TVU3lzjw8whBLVmwlfHEbpwHy2tNyfy7r30arY5JbFHS+y0eHP3Ivo6ed0rPenQfcgNu4E8ba90sAmyGsoHWs63BXxWXMhwbwAAAm9JREFUeJzFl2lb00AUhY9KO7ZWQKos1oJtWlpAltaAlKqAAkVcUFwRFdw3cF/+vkmapJNm0ixzHzmfMtPmfc7Jvb2TAmF15OixrtA3eSkWZ4wdJ4IlkkzXCRpYijV1kgKWZIwMx8EY6+6Rg/WmOBg71UfnjKVPy7DO9DtgbEDK2eCQA8bOStGQOcfDssMSqJHzQC7P0ZRCdFiCFUfRz3srlaPDtNYYG8/ytPxEZJhVzQuxSRs3JeHM0PQMZuxSVKpyzthFFRi2SzErB2NsLodL9mI+Qh0Sjt+mUou3Fgv11tcuR4AZunJ10bwqLlnPTl3uDgJLumBj1zB43VrUVtTVwlqskQ0y7wTOWHwduMG13oZiLvyGe68AZpSiy23ZFyeIaejmrdviDzqFFcW0NXSnJtj1nlIdYaUCV4qWNsPGbCp+F7iXdm1vRYJppVjD/axr94EYJq4mr4ePFNfe42jOTC0/qQSB+ToztP3UcVbIwdjOM6C+ba2eS8XU9GIXezs+sIDOdE03XppXHjH9q9mmV6/fEMQ0pZ3Sb9+9J4Kx1AfPwRvmmVmaU8WsCM50faRzJt20TlFVsyOMMmbopu3o7PBj/hcYaUxK2J776Akgj9bAJ0JnwKL/vcFh+EwJQ88+IQw42AoH8ypAGy6lbMjDgL4v2lHbSOS+rqoroteywDFNd5vfrOleXSpKwoDv3H/0+oIkzKnyPCEMmKWEoVohhAFTlDBM5AlhKJdcMN+m9VbB9YYc3Rmw2z5BZWD4QRdT0wChM4ymCWGZn4QxkflF5wzOaSwN43GSMZvSpzGRM10H+4Qw4Pef8cm/oe/6B1rJgmxPZk5ZAAAAAElFTkSuQmCC"
        />
        <image
          width="24"
          height="24"
          id="img2"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IB2cksfwAAAVxQTFRF/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA/3oA9xpz9gAAAHR0Uk5TAAhMh67Er0sHc9X/1DLJyjZH7fHy8zoO3EFI7toQfW8MAXiE43USsQsJYuhZ4ikUBKqZMBjwocKGHhsD9cdTFRExArfY28vIcvmCzKImZZY0rGfsqxluwAqdIZNFUp/nsyNQ/erlW2D75Okd7yIca6TXpSCsBJz6AAABRElEQVR4nF1S+TtCURA9SSq3kqypcEOSKNlLllD2LbJkDdmX+P+/z515Ly3zw5wz59w3370zD9DC0GBsNJmajGYLqsNgbRZ62KyGim53iKpocZb1VpeoiTazpjvbRV10dJLeZeOi201Fj4cLr0/xXqZ9JPcD0s/lgPpgkMgQEBhW6AiOhKgeDSBMOCaBca1/JDpBEEKMYBJR35SdjWkECWYwSyAxJ9zReXbiiQWVk/DSxQGVF5eWyVhJraq8hnWVXWyIsLSoHESaLowMSZohNoDNLSmJbmOHYBd77Oyrx8gDYoc4EtwRWXaOUzLBxIoTnmAOOGUhfXbO07oA8voJRC6v/sd4rXrGb7SjcfX6W1333NHoCvda9ZD3P+pGUVvI03PdPnLlFRZequXXYmXpb/lsWX6PfdT8J59f38lSKfOT+9WFPzNsLwst0Z88AAAAAElFTkSuQmCC"
        />
      </defs>
      <g id="Logo">
        <use id="Layer 32" href="#img1" x="121" y="0" />
        <use id="Layer 33" href="#img2" x="145" y="28" />
        <path
          id="Ellipse 3 copy 5"
          className="shp0"
          d="M207.78 39C209.44 39 210.78 40.34 210.78 41.98C210.78 43.63 209.44 44.97 207.78 44.97C206.12 44.97 204.78 43.63 204.78 41.98C204.78 40.34 206.12 39 207.78 39Z"
        />
        <path
          id="Shape 1 copy 5"
          className="shp0"
          d="M210.79 41.98L210.79 40.99L308.71 40.99L308.71 41.98L210.79 41.98"
        />
        <path
          id="Ellipse 3 copy 6"
          className="shp0"
          d="M102.88 39C104.53 39 105.88 40.34 105.88 41.98C105.88 43.63 104.53 44.97 102.88 44.97C101.22 44.97 99.88 43.63 99.88 41.98C99.88 40.34 101.22 39 102.88 39Z"
        />
        <path
          id="Shape 1 copy 6"
          className="shp0"
          d="M99.88 41.98L99.88 42.98L1.96 42.98L1.96 41.98L99.88 41.98"
        />
      </g>
    </svg>
  );
}
