const REQUEST_HEADERS = {
    'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
    'Accept-Language': 'en',
}

// 即将登陆
const STATUS_COMING = 2
// 支持解锁
const STATUS_AVAILABLE = 1
// 不支持解锁
const STATUS_NOT_AVAILABLE = 0
// 检测超时
const STATUS_TIMEOUT = -1
// 检测异常
const STATUS_ERROR = -2

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36'

const ICONS = [
    ['AC','🇦🇨'],['AD','🇦🇩'],['AE','🇦🇪'],['AF','🇦🇫'],['AG','🇦🇬'],['AI','🇦🇮'],['AL','🇦🇱'],['AM','🇦🇲'],['AO','🇦🇴'],['AQ','🇦🇶'],['AR','🇦🇷'],['AS','🇦🇸'],['AT','🇦🇹'],['AU','🇦🇺'],['AW','🇦🇼'],['AX','🇦🇽'],['AZ','🇦🇿'],['BA','🇧🇦'],['BB','🇧🇧'],['BD','🇧🇩'],['BE','🇧🇪'],['BF','🇧🇫'],['BG','🇧🇬'],['BH','🇧🇭'],['BI','🇧🇮'],['BJ','🇧🇯'],['BM','🇧🇲'],['BN','🇧🇳'],['BO','🇧🇴'],['BR','🇧🇷'],['BS','🇧🇸'],['BT','🇧🇹'],['BV','🇧🇻'],['BW','🇧🇼'],['BY','🇧🇾'],['BZ','🇧🇿'],['CA','🇨🇦'],['CD','🇨🇩'],['CF','🇨🇫'],['CG','🇨🇬'],['CH','🇨🇭'],['CI','🇨🇮'],['CK','🇨🇰'],['CL','🇨🇱'],['CM','🇨🇲'],['CN','🇨🇳'],['CO','🇨🇴'],['CP','🇫🇷'],['CR','🇨🇷'],['CU','🇨🇺'],['CV','🇨🇻'],['CW','🇨🇼'],['CX','🇨🇽'],['CY','🇨🇾'],['CZ','🇨🇿'],['DE','🇩🇪'],['DG','🇩🇬'],['DJ','🇩🇯'],['DK','🇩🇰'],['DM','🇩🇲'],['DO','🇩🇴'],['DZ','🇩🇿'],['EA','🇪🇦'],['EC','🇪🇨'],['EE','🇪🇪'],['EG','🇪🇬'],['EH','🇪🇭'],['ER','🇪🇷'],['ES','🇪🇸'],['ET','🇪🇹'],['EU','🇪🇺'],['FI','🇫🇮'],['FJ','🇫🇯'],['FK','🇫🇰'],['FM','🇫🇲'],['FO','🇫🇴'],['FR','🇫🇷'],['GA','🇬🇦'],['GB','🇬🇧'],['GD','🇬🇩'],['GE','🇬🇪'],['GF','🇬🇫'],['GH','🇬🇭'],['GI','🇬🇮'],['GL','🇬🇱'],['GM','🇬🇲'],['GN','🇬🇳'],['GP','🇬🇵'],['GR','🇬🇷'],['GT','🇬🇹'],['GU','🇬🇺'],['GW','🇬🇼'],['GY','🇬🇾'],['HK','🇭🇰'],['HN','🇭🇳'],['HR','🇭🇷'],['HT','🇭🇹'],['HU','🇭🇺'],['ID','🇮🇩'],['IE','🇮🇪'],['IL','🇮🇱'],['IM','🇮🇲'],['IN','🇮🇳'],['IR','🇮🇷'],['IS','🇮🇸'],['IT','🇮🇹'],['JM','🇯🇲'],['JO','🇯🇴'],['JP','🇯🇵'],['KE','🇰🇪'],['KG','🇰🇬'],['KH','🇰🇭'],['KI','🇰🇮'],['KM','🇰🇲'],['KN','🇰🇳'],['KP','🇰🇵'],['KR','🇰🇷'],['KW','🇰🇼'],['KY','🇰🇾'],['KZ','🇰🇿'],['LA','🇱🇦'],['LB','🇱🇧'],['LC','🇱🇨'],['LI','🇱🇮'],['LK','🇱🇰'],['LR','🇱🇷'],['LS','🇱🇸'],['LT','🇱🇹'],['LU','🇱🇺'],['LV','🇱🇻'],['LY','🇱🇾'],['MA','🇲🇦'],['MC','🇲🇨'],['MD','🇲🇩'],['MG','🇲🇬'],['MH','🇲🇭'],['MK','🇲🇰'],['ML','🇲🇱'],['MM','🇲🇲'],['MN','🇲🇳'],['MO','🇲🇴'],['MP','🇲🇵'],['MQ','🇲🇶'],['MR','🇲🇷'],['MS','🇲🇸'],['MT','🇲🇹'],['MU','🇲🇺'],['MV','🇲🇻'],['MW','🇲🇼'],['MX','🇲🇽'],['MY','🇲🇾'],['MZ','🇲🇿'],['NA','🇳🇦'],['NC','🇳🇨'],['NE','🇳🇪'],['NF','🇳🇫'],['NG','🇳🇬'],['NI','🇳🇮'],['NL','🇳🇱'],['NO','🇳🇴'],['NP','🇳🇵'],['NR','🇳🇷'],['NZ','🇳🇿'],['OM','🇴🇲'],['PA','🇵🇦'],['PE','🇵🇪'],['PF','🇵🇫'],['PG','🇵🇬'],['PH','🇵🇭'],['PK','🇵🇰'],['PL','🇵🇱'],['PM','🇵🇲'],['PR','🇵🇷'],['PS','🇵🇸'],['PT','🇵🇹'],['PW','🇵🇼'],['PY','🇵🇾'],['QA','🇶🇦'],['RE','🇷🇪'],['RO','🇷🇴'],['RS','🇷🇸'],['RU','🇷🇺'],['RW','🇷🇼'],['SA','🇸🇦'],['SB','🇸🇧'],['SC','🇸🇨'],['SD','🇸🇩'],['SE','🇸🇪'],['SG','🇸🇬'],['SI','🇸🇮'],['SK','🇸🇰'],['SL','🇸🇱'],['SM','🇸🇲'],['SN','🇸🇳'],['SR','🇸🇷'],['ST','🇸🇹'],['SV','🇸🇻'],['SY','🇸🇾'],['SZ','🇸🇿'],['TC','🇹🇨'],['TD','🇹🇩'],['TG','🇹🇬'],['TH','🇹🇭'],['TJ','🇹🇯'],['TL','🇹🇱'],['TM','🇹🇲'],['TN','🇹🇳'],['TO','🇹🇴'],['TR','🇹🇷'],['TT','🇹🇹'],['TV','🇹🇻'],['TW','🇨🇳'],['TZ','🇹🇿'],['UA','🇺🇦'],['UG','🇺🇬'],['UK','🇬🇧'],['UM','🇺🇲'],['US','🇺🇸'],['UY','🇺🇾'],['UZ','🇺🇿'],['VA','🇻🇦'],['VC','🇻🇨'],['VE','🇻🇪'],['VG','🇻🇬'],['VI','🇻🇮'],['VN','🇻🇳'],['VU','🇻🇺'],['WS','🇼🇸'],['YE','🇾🇪'],['YT','🇾🇹'],['ZA','🇿🇦'],['ZM','🇿🇲']
]

;(async () => {
    let panel_result = {
        title: '流媒体解锁检测',
        content: '',
        icon: 'play.tv.fill',
        'icon-color': '#FF2D55',
    }
    let [{ region, status }] = await Promise.all([testDisneyPlus()])
    await Promise.all([check_chatgpt(),check_youtube_premium(),check_netflix()])
        .then((result) => {
        let disney_result = ''
        if (status == STATUS_COMING) {
            disney_result = 'Disney+: 即将登陆~' + region
        } else if (status == STATUS_AVAILABLE){
            disney_result = 'Disney+: 已解锁，区域: ' + region
        } else if (status == STATUS_NOT_AVAILABLE) {
            disney_result = 'Disney+: 未支持 🚫 '
        } else if (status == STATUS_TIMEOUT) {
            disney_result = 'Disney+: 检测超时 🚦'
        }
        result.push(disney_result)
        let content = result.join('\n')

        panel_result['content'] = content
    })
        .finally(() => {
        $done(panel_result)
    })
})()

async function check_chatgpt() {
    let inner_check = () => {
        return new Promise((resolve, reject) => {
            let option = {
                url: 'http://chat.openai.com/cdn-cgi/trace',
                headers: REQUEST_HEADERS,
            }
            $httpClient.get(option, function(error, response, data) {
                if (error != null || response.status !== 200) {
                    reject('Error')
                    return
                }

                if (data.indexOf('ChatGPT is not available in your country') !== -1) {
                    resolve('Not Available')
                    return
                }

                let country = data.split('\n').reduce((acc, line) => {
                    let [key, value] = line.split('=')
                    acc[key] = value
                    return acc
                }, {})

                let result = country.loc
                if (result != null && result.length === 2) {
                    region = result
                } else {
                    region = 'US'
                }
                resolve(getIcon(result, ICONS))
            })
        })
    }

    let check_result = 'ChatGPT: '

    await inner_check()
        .then((code) => {
        if (code === 'Not Available') {
            check_result += '不支持解锁'
        } else {
            check_result += '已解锁，区域: ' + code.toUpperCase()
        }
    })
        .catch((error) => {
        check_result += '检测失败，请刷新面板'
    })

    return check_result
}

async function check_youtube_premium() {
    let inner_check = () => {
        return new Promise((resolve, reject) => {
            let option = {
                url: 'https://www.youtube.com/premium',
                headers: REQUEST_HEADERS,
            }
            $httpClient.get(option, function (error, response, data) {
                if (error != null || response.status !== 200) {
                    reject('Error')
                    return
                }

                if (data.indexOf('Premium is not available in your country') !== -1) {
                    resolve('Not Available')
                    return
                }

                let region = ''
                let re = new RegExp('"countryCode":"(.*?)"', 'gm')
                let result = re.exec(data)
                if (result != null && result.length === 2) {
                    region = result[1].toUpperCase()
                } else if (data.indexOf('www.google.cn') !== -1) {
                    region = 'CN'
                } else {
                    region = 'US'
                }
                resolve(getIcon(region, ICONS))
            })
        })
    }

    let youtube_check_result = 'YouTube: '

    await inner_check()
        .then((code) => {
        if (code === 'Not Available') {
            youtube_check_result += '不支持解锁'
        } else {
            youtube_check_result += '已解锁，区域: ' + code
        }
    })
        .catch((error) => {
        youtube_check_result += '检测失败，请刷新面板'
    })

    return youtube_check_result
}

async function check_netflix() {
    let inner_check = (filmId) => {
        return new Promise((resolve, reject) => {
            let option = {
                url: 'https://www.netflix.com/title/' + filmId,
                headers: REQUEST_HEADERS,
            }
            $httpClient.get(option, function (error, response, data) {
                if (error != null) {
                    reject('Error')
                    return
                }

                if (response.status === 403) {
                    reject('Not Available')
                    return
                }

                if (response.status === 404) {
                    resolve('Not Found')
                    return
                }

                if (response.status === 200) {
                    let url = response.headers['x-originating-url']
                    let region = url.split('/')[3]
                    region = region.split('-')[0]
                    if (region == 'title') {
                        region = 'US'
                    }
                    if (region != null) {
                        region = region.toUpperCase()
                    }
                    resolve(getIcon(region, ICONS))
                    return
                }

                reject('Error')
            })
        })
    }

    let netflix_check_result = 'Netflix: '

    await inner_check(81280792)
        .then((code) => {
        if (code === 'Not Found') {
            return inner_check(80018499)
        }
        netflix_check_result += '已完整解锁，区域: ' + code
        return Promise.reject('BreakSignal')
    })
        .then((code) => {
        if (code === 'Not Found') {
            return Promise.reject('Not Available')
        }

        netflix_check_result += '仅解锁自制剧，区域: ' + code
        return Promise.reject('BreakSignal')
    })
        .catch((error) => {
        if (error === 'BreakSignal') {
            return
        }
        if (error === 'Not Available') {
            netflix_check_result += '该节点不支持解锁'
            return
        }
        netflix_check_result += '检测失败，请刷新面板'
    })

    return netflix_check_result
}

async function testDisneyPlus() {
    try {
        let {region, cnbl} = await Promise.race([testHomePage(), timeout(7000)])

        let { countryCode, inSupportedLocation } = await Promise.race([getLocationInfo(), timeout(7000)])

        region = countryCode ?? region

        if (region != null) {
            region = region.toUpperCase()
        }

        region = getIcon(region, ICONS)

        // 即将登陆
        if (inSupportedLocation === false || inSupportedLocation === 'false') {
            return {region, status: STATUS_COMING}
        } else {
            return {region, status: STATUS_AVAILABLE}
        }

    } catch (error) {
        if (error === 'Not Available') {
            return {status: STATUS_NOT_AVAILABLE}
        }

        if (error === 'Timeout') {
            return {status: STATUS_TIMEOUT}
        }

        return {status: STATUS_ERROR}
    }

}

function getLocationInfo() {
    return new Promise((resolve, reject) => {
        let opts = {
            url: 'https://disney.api.edge.bamgrid.com/graph/v1/device/graphql',
            headers: {
                'Accept-Language': 'en',
                Authorization: 'ZGlzbmV5JmJyb3dzZXImMS4wLjA.Cu56AgSfBTDag5NiRA81oLHkDZfu5L3CKadnefEAY84',
                'Content-Type': 'application/json',
                'User-Agent': UA,
            },
            body: JSON.stringify({
                query: 'mutation registerDevice($input: RegisterDeviceInput!) { registerDevice(registerDevice: $input) { grant { grantType assertion } } }',
                variables: {
                    input: {
                        applicationRuntime: 'chrome',
                        attributes: {
                            browserName: 'chrome',
                            browserVersion: '94.0.4606',
                            manufacturer: 'apple',
                            model: null,
                            operatingSystem: 'macintosh',
                            operatingSystemVersion: '10.15.7',
                            osDeviceIds: [],
                        },
                        deviceFamily: 'browser',
                        deviceLanguage: 'en',
                        deviceProfile: 'macosx',
                    },
                },
            }),
        }

        $httpClient.post(opts, function (error, response, data) {
            if (error) {
                reject('Error')
                return
            }

            if (response.status !== 200) {
                reject('Not Available')
                return
            }

            data = JSON.parse(data)
            if(data?.errors){
                reject('Not Available')
                return
            }

            let {
                token: {accessToken},
                session: {
                    inSupportedLocation,
                    location: {countryCode},
                },
            } = data?.extensions?.sdk
            resolve({inSupportedLocation, countryCode, accessToken})
        })
    })
}

function testHomePage() {
    return new Promise((resolve, reject) => {
        let opts = {
            url: 'https://www.disneyplus.com/',
            headers: {
                'Accept-Language': 'en',
                'User-Agent': UA,
            },
        }

        $httpClient.get(opts, function (error, response, data) {
            if (error) {
                reject('Error')
                return
            }
            if (response.status !== 200 || data.indexOf('Sorry, Disney+ is not available in your region.') !== -1) {
                reject('Not Available')
                return
            }

            let match = data.match(/Region: ([A-Za-z]{2})[\s\S]*?CNBL: ([12])/)
            if (!match) {
                resolve({region: '', cnbl: ''})
                return
            }

            let region = match[1]
            let cnbl = match[2]
            resolve({region, cnbl})
        })
    })
}

function timeout(delay = 5000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Timeout')
        }, delay)
    })
}

function getIcon(code, icons) {
    if (code != null && code.length === 2){
        for (let i = 0; i < icons.length; i++) {
            if (icons[i][0] === code) {
                return icons[i][1] + code
            }
        }
    }
    return code
}