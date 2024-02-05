import Swal from 'sweetalert2'

export const messageMaxChar: (maxChars: number, name: string) => void = (
  maxChars: number,
  name: string,
) => {
  Swal.fire({
    icon: 'warning',
    showClass: {
      backdrop: 'swal2-noanimation',
      popup: '',
      icon: '',
    },
    title: `ENOUGH`,
    text: `Maximum number of ${maxChars} characters reached for ${name}!`,
    showConfirmButton: false,
    timer: 4000,
  })
}

export const messageValidate: (content: string) => void = (content: string) => {
  Swal.fire({
    icon: 'error',
    showClass: {
      backdrop: 'swal2-noanimation',
      popup: '',
      icon: '',
    },
    animation: false,
    title: `STOP`,
    text: `${content}`,
    showConfirmButton: true,
    timer: 5000,
  })
}
