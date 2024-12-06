export const setToggleMenuR = (state: any) => {
  state.toggleMenu = !state.toggleMenu
}

export const setEmployeesDataR = (state: any, action : any) => {
  state.employeesData = action.payload;
}