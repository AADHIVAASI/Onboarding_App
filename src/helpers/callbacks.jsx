import Swal from "sweetalert2";

export const toast = () => {
  return Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    color: "#fff",
    iconColor: "#fff",
    background: "#664de5",
    timerProgressBar: true,
  });
};
