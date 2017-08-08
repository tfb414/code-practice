
const FileManipulator = require('../index.js');

var chai = require('chai');
var chaiFiles = require('chai-files');
 
chai.use(chaiFiles);
 
var expect = chai.expect;
var file = chaiFiles.file;
var dir = chaiFiles.dir;



describe("File Manipulator", ()=>{
    let ex;
    before(()=>{
        ex = new FileManipulator();
    })
    describe("open and read", ()=>{
        
        it('should read a file',()=>{
            var chosenFile = "derp.txt"
            
            expect('tim is a dummy').to.equal(file(chosenFile));
        });
        it("actually read a file", (done)=>{
            //pass done in above
            var chosenFile = "derp.txt";
            ex.read(chosenFile, (text)=>{

                expect(text).to.equal('tim is a dummy');
                done();
            })
        });
        it("throw an error if the file does not exist", (done)=>{
            var chosenFile = "notreal.txt";
            let badFile = ()=>{
                ex.read(chosenFile, ()=>{
                });
                done();
            }
            expect(badFile).to.throw();
            
        });
        it("writes a string to the file", (done)=>{
            var outputFile = 'output.txt';
            ex.writeFile(outputFile, "mary had a little lamb", ()=>{
                console.log("i'm in the file");
                done();
            })
        });
    });
    
});