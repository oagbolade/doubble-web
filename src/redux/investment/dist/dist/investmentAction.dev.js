"use strict";

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

exports.__esModule = true;
exports.createTargetInvestment = exports.createFixedInvestment = exports.fetchAllInvestments = exports.futureTargetInvestment = exports.activeTargetInvestment = exports.futureFixedInvestment = exports.activeFixedInvestment = exports.investmentType = exports.checkInvestmentStatus = void 0;

var investmentTypes = require("./investmentTypes");

var http_1 = require("../../https/http");

var utilities_1 = require("../../utils/utilities");

exports.checkInvestmentStatus = function (effective, maturity) {
  var now = new Date().getTime();
  var start = (now - Date.parse(effective)).toString().charAt(0); // -ve shows has not started

  var end = (Date.parse(maturity) - now).toString().charAt(0); // +ve shows active investment

  if (end === "-") {
    return "completed";
  } else if (end !== "-" && start !== "-") {
    return "active";
  } else {
    return "pending";
  }
};

exports.investmentType = function (url, userId) {
  return __awaiter(void 0, void 0, void 0, function () {
    var result, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          return [4
          /*yield*/
          , http_1.httpRequest({
            url: url,
            method: "POST",
            body: {
              platform: 1,
              imei: "string",
              deviceType: "string",
              deviceManufacturer: "string",
              deviceModel: "string",
              deviceIP: "string",
              deviceName: "string",
              userId: userId
            }
          })];

        case 1:
          result = _a.sent();
          return [2
          /*return*/
          , {
            result: result,
            error: "",
            status: result.status
          }];

        case 2:
          error_1 = _a.sent();
          return [2
          /*return*/
          , {
            result: error_1,
            status: false
          }];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

exports.activeFixedInvestment = function (userId) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var url, info, newData, err_1;

      var _a, _b, _c, _d;

      return __generator(this, function (_e) {
        switch (_e.label) {
          case 0:
            _e.trys.push([0, 2,, 3]);

            dispatch({
              type: investmentTypes.FETCHING_INVESTMENT
            });
            url = "FixedInvestment/ListofActiveFixed";
            return [4
            /*yield*/
            , exports.investmentType(url, userId)];

          case 1:
            info = _e.sent();

            if (info === null || info === void 0 ? void 0 : info.status) {
              newData = (_b = (_a = info === null || info === void 0 ? void 0 : info.result) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.map(function (r) {
                return {
                  title: r.purpose,
                  type: "Active Fixed",
                  investmentAmount: utilities_1.cleanNumber(r.payInAmount),
                  maturityDate: r.maturityDate,
                  effectiveDate: r.effectiveDate,
                  investmentID: r.investmentID,
                  totalContribution: utilities_1.cleanNumber(r.futureValue),
                  nextEarning: utilities_1.getNextEarning(r.maturityDate) > 0 ? utilities_1.getNextEarning(r.maturityDate) : 0,
                  frequency: r.term === 30 ? "Monthly" : r.term > 60 ? "Biannually" : "Quarterly",
                  intrest: r.interestEarned.split(" ")[1],
                  timeline: {
                    start: 3,
                    end: 10
                  },
                  status: exports.checkInvestmentStatus(r.effectiveDate, r.maturityDate)
                };
              });
              dispatch({
                type: investmentTypes.FETCH_INVESTMENT_COMPLETED,
                payload: newData
              });
            } else {
              dispatch({
                type: investmentTypes.FETCH_INVESTMENT_FAILED,
                payload: ((_d = (_c = info === null || info === void 0 ? void 0 : info.result) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message) || "No Active Fixed Investment Found!"
              });
            }

            return [3
            /*break*/
            , 3];

          case 2:
            err_1 = _e.sent();
            dispatch({
              type: investmentTypes.FETCH_INVESTMENT_FAILED,
              payload: err_1 || "No Active Fixed Investment Found!"
            });
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};

exports.futureFixedInvestment = function (userId) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var today, url, info, newData, _a, message_1;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            today = new Date().toISOString().split("T")[0];
            _b.label = 1;

          case 1:
            _b.trys.push([1, 3,, 4]);

            dispatch({
              type: investmentTypes.FETCHING_INVESTMENT
            });
            url = "FixedInvestment/ListofFutureFixed";
            return [4
            /*yield*/
            , exports.investmentType(url, userId)];

          case 2:
            info = _b.sent();

            if (info === null || info === void 0 ? void 0 : info.status) {
              newData = info === null || info === void 0 ? void 0 : info.result.data.map(function (r) {
                return {
                  title: r.purpose,
                  type: "Future Fixed",
                  investmentAmount: utilities_1.cleanNumber(r.payInAmount),
                  nextEarning: utilities_1.getNextEarning(r.maturityDate) > 0 ? utilities_1.getNextEarning(r.maturityDate) : 0,
                  maturityDate: r.maturityDate,
                  effectiveDate: r.effectiveDate,
                  investmentID: r.investment_ID,
                  totalContribution: utilities_1.cleanNumber(r.futureValue),
                  frequency: r.term === 30 ? "Monthly" : r.term > 60 ? "Biannually" : "Quarterly",
                  intrest: utilities_1.cleanNumber(r.futureValue) - utilities_1.cleanNumber(r.payInAmount),
                  timeline: {
                    start: 1,
                    end: r.term / 30 > 0 ? Math.floor(r.term / 30) : 1
                  },
                  status: exports.checkInvestmentStatus(today, r.effectiveDate)
                };
              });
              dispatch({
                type: investmentTypes.FETCH_INVESTMENT_COMPLETED,
                payload: newData
              });
            } else {
              dispatch({
                type: investmentTypes.FETCH_INVESTMENT_FAILED,
                payload: (info === null || info === void 0 ? void 0 : info.result.data.message) || "No Future Fixed Investment Found!"
              });
            }

            return [3
            /*break*/
            , 4];

          case 3:
            _a = _b.sent();
            message_1 = _a.message;
            dispatch({
              type: investmentTypes.FETCH_INVESTMENT_FAILED,
              payload: message_1 || "No Future Fixed Investment Found!"
            });
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};

exports.activeTargetInvestment = function (userId) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var url, info, newData, _a, message_2;

      var _b, _c;

      return __generator(this, function (_d) {
        switch (_d.label) {
          case 0:
            _d.trys.push([0, 2,, 3]);

            dispatch({
              type: investmentTypes.FETCHING_INVESTMENT
            });
            url = "TargetInvestment/ListofActiveTarget";
            return [4
            /*yield*/
            , exports.investmentType(url, userId)];

          case 1:
            info = _d.sent();

            if (info === null || info === void 0 ? void 0 : info.status) {
              newData = (_c = (_b = info === null || info === void 0 ? void 0 : info.result) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.map(function (r) {
                return {
                  title: r.purpose,
                  type: "Active Target",
                  investmentAmount: utilities_1.cleanNumber(r.investmentValue),
                  maturityDate: r.maturityDate,
                  nextEarning: utilities_1.getNextEarning(r.maturityDate) > 0 ? utilities_1.getNextEarning(r.maturityDate) : 0,
                  effectiveDate: r.effectiveDate,
                  investmentID: r.investment_ID,
                  totalContribution: utilities_1.cleanNumber(r.contributions),
                  frequency: r.frequency,
                  intrest: Math.floor(r.interest),
                  timeline: {
                    start: 1,
                    end: r.term
                  },
                  status: exports.checkInvestmentStatus(r.effectiveDate, r.maturityDate)
                };
              });
              dispatch({
                type: investmentTypes.FETCH_INVESTMENT_COMPLETED,
                payload: newData
              });
            } else {
              dispatch({
                type: investmentTypes.FETCH_INVESTMENT_FAILED,
                payload: (info === null || info === void 0 ? void 0 : info.result.data.message) || "No Active Target Investment Found!"
              });
            }

            return [3
            /*break*/
            , 3];

          case 2:
            _a = _d.sent();
            message_2 = _a.message;
            dispatch({
              type: investmentTypes.FETCH_INVESTMENT_FAILED,
              payload: message_2 || "No Active Target Investment Found!"
            });
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};

exports.futureTargetInvestment = function (userId) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var url, info, newData, _a, message_3;

      var _b, _c;

      return __generator(this, function (_d) {
        switch (_d.label) {
          case 0:
            _d.trys.push([0, 2,, 3]);

            dispatch({
              type: investmentTypes.FETCHING_INVESTMENT
            });
            url = "TargetInvestment/ListofFutureTarget";
            return [4
            /*yield*/
            , exports.investmentType(url, userId)];

          case 1:
            info = _d.sent();

            if (info === null || info === void 0 ? void 0 : info.status) {
              newData = (_c = (_b = info === null || info === void 0 ? void 0 : info.result) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.map(function (r) {
                return {
                  title: r.purpose,
                  type: "Future Target",
                  maturityDate: r.maturityDate,
                  effectiveDate: r.effectiveDate,
                  investmentID: r.investment_ID,
                  totalContribution: r.targetValue + r.payInAmount,
                  frequency: r.frequency,
                  nextEarning: utilities_1.getNextEarning(r.maturityDate) > 0 ? utilities_1.getNextEarning(r.maturityDate) : 0,
                  investmentAmount: Math.floor(r.targetValue),
                  intrest: Math.floor(r.interest),
                  timeline: {
                    start: 1,
                    end: r.term
                  },
                  status: exports.checkInvestmentStatus(r.effectiveDate, r.maturityDate)
                };
              });
              dispatch({
                type: investmentTypes.FETCH_INVESTMENT_COMPLETED,
                payload: newData
              });
            } else {
              dispatch({
                type: investmentTypes.FETCH_INVESTMENT_FAILED,
                payload: (info === null || info === void 0 ? void 0 : info.result.data.message) || "No Future Target Investment Found!"
              });
            }

            return [3
            /*break*/
            , 3];

          case 2:
            _a = _d.sent();
            message_3 = _a.message;
            dispatch({
              type: investmentTypes.FETCH_INVESTMENT_FAILED,
              payload: message_3 || "No Future Target Investment Found!"
            });
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};

exports.fetchAllInvestments = function (investment) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var newData;
      return __generator(this, function (_a) {
        console.log("allInvestmentAction", investment);
        newData = investment === null || investment === void 0 ? void 0 : investment.map(function (r) {
          return {
            title: r.purpose,
            type: "Future Target",
            maturityDate: r.maturityDate,
            effectiveDate: r.effectiveDate,
            investmentID: r.investment_ID,
            totalContribution: r.targetValue + r.payInAmount,
            frequency: r.frequency,
            nextEarning: utilities_1.getNextEarning(r.maturityDate) > 0 ? utilities_1.getNextEarning(r.maturityDate) : 0,
            investmentAmount: Math.floor(r.targetValue),
            intrest: Math.floor(r.interest),
            timeline: {
              start: 1,
              end: r.term
            },
            status: exports.checkInvestmentStatus(r.effectiveDate, r.maturityDate)
          };
        });
        dispatch({
          type: investmentTypes.FETCH_INVESTMENT_COMPLETED,
          payload: newData
        });
        return [2
        /*return*/
        ];
      });
    });
  };
};

exports.createFixedInvestment = function (investment, productID, newInfo) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var result, _a, message_4;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 2,, 3]);

            dispatch({
              type: investmentTypes.FETCHING_INVESTMENT
            });
            return [4
            /*yield*/
            , http_1.httpRequest({
              url: "FixedInvestment/CreateFixed",
              method: "POST",
              body: {
                userId: newInfo.userId,
                productId: productID,
                fixedId: 27,
                payInAmount: Number(investment.amount),
                bvn: newInfo.bvn,
                emailAddress: newInfo.emailAddress,
                payInAccount: investment.fundingAccount,
                firstName: newInfo.firstName,
                currency: investment.currency,
                effectiveDate: investment.startDate,
                term: Number(investment.month),
                daoCode: investment.daoCode,
                rollover: 0,
                purpose: investment.title,
                platform: 1,
                beneficiaryType: 0,
                imei: "string",
                deviceType: "1",
                deviceManufacturer: "HMD Global",
                deviceModel: "Nokia 4.2",
                deviceIP: "",
                deviceName: "string",
                transactionPIN: investment.transactionPIN
              }
            })];

          case 1:
            result = _b.sent();
            dispatch({
              type: investmentTypes.CREATE_INVESTMENT,
              payload: {
                success: result.status,
                message: result.message
              }
            });
            return [3
            /*break*/
            , 3];

          case 2:
            _a = _b.sent();
            message_4 = _a.message;
            dispatch({
              type: investmentTypes.CREATE_INVESTMENT,
              payload: {
                success: false,
                message: message_4
              }
            });
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};

exports.createTargetInvestment = function (investment, productID, newInfo) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var result, _a, message_5;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 2,, 3]);

            dispatch({
              type: investmentTypes.FETCHING_INVESTMENT
            });
            return [4
            /*yield*/
            , http_1.httpRequest({
              url: "TargetInvestment/CreateTarget",
              method: "POST",
              body: {
                platform: 1,
                imei: "f73cdbb84f771952",
                deviceType: "1",
                deviceManufacturer: "HMD Global",
                deviceModel: "Nokia 4.2",
                deviceIP: "",
                deviceName: "",
                userId: newInfo.userId,
                productId: productID,
                targetId: 1,
                bvn: newInfo.bvn,
                currency: investment.currency,
                firstName: newInfo.firstName,
                lastName: newInfo.lastName,
                emailAddress: newInfo.emailAddress,
                payInAmount: Number(investment.amount),
                targetValue: Number(investment.targetValue),
                payInAccount: investment.fundingAccount,
                beneficiaryAccount: investment.beneficiaryAccount,
                effectiveDate: investment.startDate,
                transactionPIN: investment.transactionPIN,
                daoCode: investment.daoCode,
                frequency: investment.frequency === "Yearly" ? 12 : investment.frequency === "Biannually" ? 6 : investment.frequency === "Quarterly" ? 4 : 1,
                month: 17,
                purpose: investment.title,
                beneficiaryType: 0
              }
            })];

          case 1:
            result = _b.sent();

            if ((result === null || result === void 0 ? void 0 : result.status) === true) {
              dispatch({
                type: investmentTypes.CREATE_INVESTMENT,
                payload: {
                  success: true,
                  message: result.message
                }
              });
            } else {
              dispatch({
                type: investmentTypes.CREATE_INVESTMENT,
                payload: {
                  success: false,
                  message: (result === null || result === void 0 ? void 0 : result.message) || "Something went wrong please refresh & try agin"
                }
              });
            }

            return [3
            /*break*/
            , 3];

          case 2:
            _a = _b.sent();
            message_5 = _a.message;
            dispatch({
              type: investmentTypes.CREATE_INVESTMENT,
              payload: {
                success: false,
                message: message_5
              }
            });
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};