/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var teacher3 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};
console.log(teacher3);
var printTeacher = function (firstName, lastName) { return "".concat(firstName.charAt(0), ". ").concat(lastName); };
console.log(printTeacher('John', 'Doe'));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVNFLElBQU0sUUFBUSxHQUFZO0lBQzNCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNiLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBUXRCLElBQU0sWUFBWSxHQUF5QixVQUM1QyxTQUFpQixFQUNqQixRQUFnQixJQUNGLGlCQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQUssUUFBUSxDQUFFLEVBQXJDLENBQXFDLENBQUM7QUFFbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFVekM7SUFDRCxzQkFDVSxTQUFpQixFQUNqQixRQUFnQjtRQURoQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVE7SUFDdkIsQ0FBQztJQUVKLHFDQUFjLEdBQWQ7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDQSxtQkFBQztBQUFELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRlYWNoZXIge1xuXHRyZWFkb25seSBmaXJzdE5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgbGFzdE5hbWU6IHN0cmluZztcblx0ZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcblx0eWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7XG5cdGxvY2F0aW9uOiBzdHJpbmc7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbiAgfVxuXG4gIGNvbnN0IHRlYWNoZXIzOiBUZWFjaGVyID0ge1xuXHRmaXJzdE5hbWU6ICdKb2huJyxcblx0bGFzdE5hbWU6ICdEb2UnLFxuXHRmdWxsVGltZUVtcGxveWVlOiBmYWxzZSxcblx0bG9jYXRpb246ICdMb25kb24nLFxuXHRjb250cmFjdDogZmFsc2UsXG4gIH07XG5cbiAgY29uc29sZS5sb2codGVhY2hlcjMpO1xuICBpbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG5cdG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xuICB9XG4gIGludGVyZmFjZSBwcmludFRlYWNoZXJGdW5jdGlvbiB7XG5cdChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZztcbiAgfVxuXG4gIGNvbnN0IHByaW50VGVhY2hlcjogcHJpbnRUZWFjaGVyRnVuY3Rpb24gPSAoXG5cdGZpcnN0TmFtZTogc3RyaW5nLFxuXHRsYXN0TmFtZTogc3RyaW5nXG4gICk6IHN0cmluZyA9PiBgJHtmaXJzdE5hbWUuY2hhckF0KDApfS4gJHtsYXN0TmFtZX1gO1xuXG4gIGNvbnNvbGUubG9nKHByaW50VGVhY2hlcignSm9obicsICdEb2UnKSk7XG4gIGludGVyZmFjZSBTdHVkZW50Q29uc3RydWN0b3Ige1xuXHRuZXcgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogU3R1ZGVudENsYXNzSW50ZXJmYWNlO1xuICB9XG5cbiAgaW50ZXJmYWNlIFN0dWRlbnRDbGFzc0ludGVyZmFjZSB7XG5cdHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZztcblx0ZGlzcGxheU5hbWUoKTogc3RyaW5nO1xuICB9XG5cbiAgY2xhc3MgU3R1ZGVudENsYXNzIGltcGxlbWVudHMgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcblx0Y29uc3RydWN0b3IoXG5cdCAgcHJpdmF0ZSBmaXJzdE5hbWU6IHN0cmluZyxcblx0ICBwcml2YXRlIGxhc3ROYW1lOiBzdHJpbmdcblx0KSB7fVxuXG5cdHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZyB7XG5cdCAgcmV0dXJuICdDdXJyZW50bHkgd29ya2luZyc7XG5cdH1cblxuXHRkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuXHQgIHJldHVybiB0aGlzLmZpcnN0TmFtZTtcblx0fVxuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9