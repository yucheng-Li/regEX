
/**
 * 正则 - 姓名
 * @param text 
 * @returns 
 */
export function checkName(text) {
    const reg = /^(([a-zA-Z+\.?\·?a-zA-Z+]{2,30}$)|([\u4e00-\u9fa5+\·?\u4e00-\u9fa5+]{2,30}$))/;
    return reg.test(text)
}
/**
 * 正则 - 身份证号
 * @param text 
 * @returns 
 */
export function checkIDCard(text) {
    const reg = /^(^[1-9]\d{5}[1-9]\d{3}(((0[2])([0|1|2][0-8])|(([0-1][1|4|6|9])([0|1|2][0-9]|[3][0]))|(((0[1|3|5|7|8])|(1[0|2]))(([0|1|2]\d)|3[0-1]))))((\d{4})|\d{3}[Xx])$)$/;
    return reg.test(text)
}
/**
 * 正则 - 手机号
 * @param text 
 */
export function checkPhone(text) {
    const reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
    return reg.test(text)
}
