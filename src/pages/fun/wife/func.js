import { Hair_data, Attribute_data, Character_data, CupSize_data, Skin_data, Face_data } from './constant'
export function generateObj(height) {
    return {
        'height': generateHeight(height),
        'weight': generateWeight(),
        'hair': generateHair(),
        'attr': generateAttr(),
        'character': generateCharacter(),
        'CUP': generateCup(),
        'skin': generateSkin(),
        'face': generateFace()
    }
}
// 生成身高
export function generateHeight(height = 170) {
    return  height - 5 - parseInt(Math.random()*15)
}

export function generateWeight(weight = 60) {
    return  weight - parseInt(Math.random()*15)
}

// 生成发型
export function generateHair() {
    let length = Hair_data.length
    const index = parseInt(Math.random()*length)
    return Hair_data[index]
}

// 生成脸型
export function generateFace() {
    let length = Face_data.length
    const index = parseInt(Math.random()*length)
    return Face_data[index]
}

// 生成属性
export function generateAttr() {
    let length = Attribute_data.length
    const index = parseInt(Math.random()*length)
    return Attribute_data[index]
}

// 生成角色
export function generateCharacter() {
    let length = Character_data.length
    const index = parseInt(Math.random()*length)
    return Character_data[index]
}

// 生成cup
export function generateCup() {
    let length = CupSize_data.length
    const index = parseInt(Math.random()*length)
    return CupSize_data[index]
}

// 生成肤色
export function generateSkin() {
    let length = Skin_data.length
    const index = parseInt(Math.random()*length)
    return Skin_data[index]
}